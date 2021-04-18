  
import express, { Request, Response } from 'express'
import Logger from '../lib/logger';
import { User } from '../models/user'

const router = express.Router()

router.get('/api/user', async (req: Request, res: Response) => {
  const user = await User.find({ "name": "Ned Stark" })
  //const user = await User.find({ });

  Logger.error("This is an error log");
  Logger.warn("This is a warn log");
  Logger.info("This is a info log");
  Logger.http("This is a http log");
  Logger.debug("This is a debug log");

  return res.status(200).send(user);
})

// router.post('/api/todo', async (req: Request, res: Response) => {
//   const { title, description } = req.body;

//   const todo = Todo.build({ title, description })
//   await todo.save()
//   return res.status(201).send(todo)
// })

export { router as userRouter }