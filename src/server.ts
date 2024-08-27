import express from "express"
import dotenv from "dotenv"
import { routes } from "./routes"
import cors from 'cors'
import { initDatabase } from "./instances/pg.sequelize"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(routes)
async function startServer() {
    await initDatabase();
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

startServer();