import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/courseController";
import { episodeController } from "./controllers/episodeController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middleware/auth";


const router = express.Router();

router.get("/categories",ensureAuth, categoriesController.index);
router.get("/categories/:id", categoriesController.show);

router.get("/courses/featured", coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/search", coursesController.search);
router.get("/courses/:id", coursesController.show);

router.get("/episodes/stream", episodeController.stream);

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

export { router };
