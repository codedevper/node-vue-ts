import { Application } from "express";
import PageRoutes from "./page.routes";
import tutorialRoutes from "./turorial.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", PageRoutes);
    app.use("/api/tutorials", tutorialRoutes);
  }
}