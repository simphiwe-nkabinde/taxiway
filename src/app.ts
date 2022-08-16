import express, {Application, Request, Response}  from "express";
import taxiRouteRoutes from "./api/taxiRoute/taxiRoute.routes";

const app : Application = express();
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send("taxiway")
})


app.use('/route', taxiRouteRoutes)

app.listen(5000, () => console.log("server running"))