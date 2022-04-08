import { Router } from "express";

import { findAll, createArticle, updateArticle } from "controllers/article";

const router = Router();

router.get("/", findAll);
router.post("/create", createArticle);
router.put("/update/:id", updateArticle);

export { router as articleRouter };
