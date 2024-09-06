import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://onebitflix:onebitflix@localhost:5432/onebitflix_development"
);
