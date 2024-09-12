import { Router } from "express";
import { welcome } from "../controllers/page.controller";

class PageRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", welcome);
  }
}

export default new PageRoutes().router;