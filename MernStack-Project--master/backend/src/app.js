const express = require("express");
const { route } = require("express/lib/application");
require("../src/db/dbConn")
const app = express();
const port = 3001;
const router = require("../src/routers/notes")


app.get("/", async(req,res) => {
    res.send("Hello from Dhruv")
})
app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log(`Server is up and running at port ${port}`)
})