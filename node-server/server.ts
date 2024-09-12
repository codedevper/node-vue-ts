import express, { Express, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./app/routes";
import 'dotenv/config'

const app: Express = express();
const port: string | number = process.env.SERVER_PORT || 8080;

const corsOptions: CorsOptions = {
    origin: process.env.FRONTEND_URL
  };

app.use(cors(corsOptions));

const path = __dirname + '/app/views/';

app.use(express.static(path));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path + "index.html");
});

new Routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
