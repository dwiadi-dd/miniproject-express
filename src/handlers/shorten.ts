import { Request, Response, NextFunction } from "express";
import { generate } from "shortid";

const shortenData = new Map();

const get = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { short_url } = req.params;
    const findShorten = shortenData.get(short_url);
    res.redirect(301, findShorten);
  } catch (error) {
    next(error);
  }
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = Array.from(shortenData).map(([key, url]) => ({ key, url }));

    res.send({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { url } = req.body;
    const urlRegex = /^(http|https):\/\/[^ "]+$/;

    if (!urlRegex.test(url)) {
      res
        .status(400)
        .send({ status: 400, success: false, message: "Invalid URL" });
    } else {
      const key = generate();
      shortenData.set(key, url);
      res.send({ status: 200, success: true, message: "success", data: key });
    }
  } catch (error) {
    next(error);
  }
};
export default { get, create, getAll };
