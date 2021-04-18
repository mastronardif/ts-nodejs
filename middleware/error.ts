import express, { Request, Response, NextFunction } from "express";
import Logger from '../lib/logger';

function logErrors (err: Error, req: Request, res: Response, next: NextFunction) {
    //console.error(err.stack);
    Logger.error('xxxxxxxxxxxxxxxxxx s s s  s s');
    
  Logger.error("ZZERROR:"+ err);
  // Logger.warn("logErrors is a warn log");
  // Logger.info("logErrors is a info log");
  // Logger.http("logErrors is a http log");
  // Logger.debug("logErrors is a debug log");

    next(err)
  }

  function clientErrorHandler (err: Error, req: Request, res: Response, next: NextFunction) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
  }

  function errorHandler (err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500)
    res.render('error', { error: err })
  }

const errorMiddleware = {
  logErrors,
  clientErrorHandler,
  errorHandler
}

export default errorMiddleware;
//export default logErrors; clientErrorHandler