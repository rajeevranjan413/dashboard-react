import { Router } from "express";

import { sendData } from "../controllers/data.controllers.js";

const router = Router();

router.route("/jsondata").get(sendData);

export default router;
