const express = require("express");
const mongoose = require("mongoose");
const app = express();

const appRouter = require("./routes/appRoutes");

app.use("/api/", appRouter);

mongoose
  .connect("<INSERT MONGODB CONNECTION STRING HERE>")
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Padhakku Assignment");
});

app.all("*", (req, res) => {
  res.send(`Can't find ${req.originalUrl} on this server`);
});

app.listen(3000, () => {
  console.log("Server is running at port: 3000");
});
