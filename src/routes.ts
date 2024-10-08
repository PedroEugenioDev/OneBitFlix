import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/courseController";
import { episodeController } from "./controllers/episodeController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthViaQuery } from "./middleware/auth";
import { favoritesController } from "./controllers/favoriteController";
import { likesController } from "./controllers/likeController";
import { usersController } from "./controllers/userController";

const router = express.Router();

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", coursesController.newest);
router.get("/courses/popular", ensureAuth, coursesController.popular)
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery, episodeController.stream);
router.get('/episodes/:id/watchTime', ensureAuth, episodeController.getWatchTime)
router.post('/episodes/:id/watchTime', ensureAuth, episodeController.setWatchTime)

router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.save)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)
router.get('/users/current/watching', ensureAuth, usersController.watching)

export { router };
