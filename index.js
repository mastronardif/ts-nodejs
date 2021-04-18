"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_1 = require("./routes/user");
//import mongodb from 'mongodb';
//import { MongoClient } from 'mongodb';
var mongoose_1 = __importDefault(require("mongoose"));
var user_2 = require("./models/user");
var logger_1 = __importDefault(require("./lib/logger"));
var morganMiddleware_1 = __importDefault(require("./config/morganMiddleware"));
var envs_1 = require("./envs");
//Logger.info(`databaseConnection= ${JSON.stringify(databaseConnection)}`);
logger_1.default.info("appUrl= " + envs_1.appUrl + " " + envs_1.port + ", " + envs_1.dbName + ", " + envs_1.dbUsername + ", " + envs_1.dbPassword);
var myPort = process.env.port || envs_1.port || 3000;
//sample_mflix.users
//const uriDB = "mongodb+srv://mastronardif:mongo123!@cluster0.bx2it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var uriDB = "mongodb+srv://mastronardif:mongo123!@cluster0.bx2it.mongodb.net/sample_mflix?retryWrites=true&w=majority";
//mongoose.connect('mongodb://localhost:27017/test-todo', {
mongoose_1.default.connect(uriDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function () {
    console.log('connected to database');
    logger_1.default.error("This is an error log");
    logger_1.default.warn("This is a warn log");
    logger_1.default.info("This is a info log");
    logger_1.default.http("This is a http log");
    logger_1.default.debug("This is a debug log");
});
//
var app = express_1.default();
app.use(morganMiddleware_1.default);
app.use(user_1.userRouter);
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something FUCKING broke!');
});
//   function customMiddleware(req: Request, res: Response, next: NextFunction): void {
//     // do some work here
//     res.status(500).send('Something broke!')
//     next();
////////////////////////////////
app.get('/wtf', function (req, res, next) {
    next();
    throw new Error('BROKEN'); // Express will catch this on its own.
});
app.get('/', function (req, res) {
    res.send('Well done! 100-08 with mongodb, mongoose, ----');
    //testDB();
    //queryDB();
    queryDB22();
});
app.listen(myPort, function () {
    console.log("The application is listening on port " + myPort + "!");
});
// function testDB() {
//     const uri = "mongodb+srv://mastronardif:mongo123@cluster0.bx2it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
    console.log('22222222222222222222222');
    function runA() {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
                        return [4 /*yield*/, user_2.User.find({ "name": "Ned Stark" })];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [3 /*break*/, 3];
                    case 2:
                        //await client.close();
                        console.log('fffffffffffffff');
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    runA().catch(console.dir);
}
// function queryDB() {
//     const uri = "mongodb+srv://mastronardif:mongo123!@cluster0.bx2it.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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
