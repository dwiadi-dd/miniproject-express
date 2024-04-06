import { Router, Request, Response } from "express";
import shorten from "../handlers/shorten";
import { handleInputErrors } from "../modules/middleware";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    status: 200,
    message: "success",
    data: "URL Shortener API",
  });
});

router.get(["/shorten", "/shorten/:short_url"], shorten.get);
router.get(["/all"], shorten.getAll);
router.post("/shorten", handleInputErrors, shorten.create);

export default router;
