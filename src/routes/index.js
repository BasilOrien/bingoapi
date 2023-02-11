import { Router } from "express";
import { createPlayer, getPlayers } from "../controllers/index.controller.js";

const router = Router();

router.get("/", getPlayers);
router.post("/", createPlayer);

export default router;
