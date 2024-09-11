import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { componentLoader } from "./components";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize);

export const adminJS = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  dashboard: dashboardOptions,
  componentLoader,
  locale: locale,
  branding: brandingOptions,
});

export const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJS,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
