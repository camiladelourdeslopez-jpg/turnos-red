import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const code = err.code || "INTERNAL_ERROR";
  const message = err.message || "Internal server error";

  res.status(status).json({
    status,
    message,
    code,
    details: err.details || []
  });
};
