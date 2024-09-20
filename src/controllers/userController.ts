import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth";
import { userService } from "../services/userServices";

export const usersController = {
    show: async (req: AuthenticatedRequest, res: Response) => {
        try {
            const currentUser = req.user!
            return res.json(currentUser)
        } catch (err) {
            if (err instanceof Error) {
              return res.status(400).json({ message: err.message })
            }
        }
    },

  watching: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!
    try {
      const watching = await userService.getKeepWatchingList(id)
      return res.json(watching)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}