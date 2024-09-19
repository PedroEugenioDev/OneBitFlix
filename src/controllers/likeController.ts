import { Response } from 'express'
import { likeService } from '../services/likeServices'
import { AuthenticatedRequest } from '../middleware/auth'

export const likesController = {
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const { courseId } = req.body
    try {
      const like = await likeService.create(userId, courseId)
      return res.status(201).json(like)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}