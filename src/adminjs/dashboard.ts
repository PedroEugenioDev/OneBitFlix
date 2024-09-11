import { Components } from "./components";
import { Category, Course, Episode, User } from "../models";
import { PageHandler } from "adminjs";

export const dashboardOptions: { handler?: PageHandler; component: string } = {
  component: Components.Dashboard,
  handler: async (req, res, context) => {
    const courses = await Course.count();
    const episodes = await Episode.count();
    const category = await Category.count();
    const standardUsers = await User.count({ where: { role: "user" } });

    res.json({
      Cursos: courses,
      Episódios: episodes,
      Categorias: category,
      Usuários: standardUsers,
    });
  },
};
