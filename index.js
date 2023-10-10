import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 8080

app.get("/", (req, res) => {
    res.status(200).json("server initiated")
})

app.get("/resgister", (req, res) => {
    res.json("registration successful")
})

app.listen( PORT, () => {
    console.log("server initiated ")
})