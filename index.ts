import express, { Request, Response, NextFunction } from "express";
import * as fs from "fs";
import { userRouter } from "./routes/user";
import  * as em from "./middleware/error";
//import mongodb from 'mongodb';
//import { MongoClient } from 'mongodb';
import mongoose from "mongoose";
import { User } from "./models/user";
import Logger from "./lib/logger";
import morganMiddleware from "./config/morganMiddleware";
//import databaseConnection from "./config/databaseConnection";
import { appUrl, port, dbName, dbPassword, dbUsername } from "./envs";

//Logger.info(`databaseConnection= ${JSON.stringify(databaseConnection)}`);
Logger.info(
  `appUrl= ${appUrl} ${port}, ${dbName}, ${dbUsername}, ${dbPassword}`
);
const myPort = process.env.port || port || 3000;
//sample_mflix.users
const uriDB = `mongodb+srv://mastronardif:${dbPassword}@cluster0.bx2it.mongodb.net/sample_mflix?retryWrites=true&w=majority`;

mongoose.connect(
  uriDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");

    Logger.error("This is an error log");
    Logger.warn("This is a warn log");
    Logger.info("This is a info log");
    Logger.http("This is a http log");
    Logger.debug("This is a debug log");
  }
);
//
const app = express();
app.use(morganMiddleware);
app.use(userRouter);

//   function customMiddleware(req: Request, res: Response, next: NextFunction): void {
//     // do some work here
//     res.status(500).send('Something broke!')
//     next();

///////////////////////////////
app.get("/wtf", function (req, res, next) {
  fs.readFile("./public/html/bobo.html", "utf-8", function (err, data) {
    if (err) {
      next(err);
    }

    res.send(data);
  });
  //next('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
  //throw new Error("BROKEN"); // Express will catch this on its own.
});

app.get("/", (req, res) => {
  res.send("Well done! 100-08 with mongodb, mongoose, ----");
  //testDB();
  //queryDB();
  queryDB22();
});

app.all("*", (req, res, next) => {
  /*
    res.status(404).json({
      status: 'fail',
      message: `Can't find ${req.originalUrl} on this server!`
    });
    */
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  //err.status = 'fail';
  //err.statusCode = 404;

  next(err);
});

//app.use(errorRouter);
app.use(em.default.logErrors);
app.use(em.default.clientErrorHandler);
app.use(em.default.errorHandler);


// app.use(function (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void {
//   Logger.error("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEeeeeeeeeeeeeeeeeeeee");
//   console.error(err.stack);
//   res.status(500).send("Something  broke! " + err);
// });

app.listen(myPort, () => {
  console.log(`The application is listening on port ${myPort}!`);
});


  
// function testDB() {

//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect((err: any) => {
//         const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//         console.log(err);
//         client.close();
//     });
// }

function queryDB22() {
  //const user = User.find({});
  //const user = User.find({"name": "Ned Stark"});
  //console.log(user);
  //user.map(doc => doc.name).sort();
  console.log("22222222222222222222222");
  async function runA() {
    try {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
      const user = await User.find({ name: "Ned Stark" });
      console.log(user);
      //console.log(user.forEach(sss => console.log(sss)))
    } finally {
      //await client.close();
      console.log("fffffffffffffff");
    }
  }
  runA().catch(console.dir);
}

// function queryDB() {

//     const client = new MongoClient(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

//     async function run() {
//         try {
//             await client.connect();

//             const database = client.db("sample_mflix");
//             const movies = database.collection("movies");

//             // Query for a movie that has the title 'The Room'
//             const query = { title: "The Room" };

//             const options = {
//                 // sort matched documents in descending order by rating
//                 sort: { rating: -1 },
//                 // Include only the `title` and `imdb` fields in the returned document
//                 projection: { _id: 0, title: 1, imdb: 1 },
//             };

//             const movie = await movies.findOne(query, options);

//             // since this method returns the matched document, not a cursor, print it directly
//             console.log(movie);
//         } finally {
//             console.log('ssssss');
//             await client.close();
//         }
//     }
//     run().catch(console.dir);

// }
