import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
};

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = [];
  console.log(req.body.url);
  if (!req.body.url) {
    errors.push({ message: "url is missing" });
  }

  if (errors.length > 0) {
    res.status(400);
    res.json({ errors });
  } else {
    next();
  }
};
