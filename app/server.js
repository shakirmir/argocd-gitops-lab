const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello! GitHub Actions + Argo CD + kind deployment successful.");
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(3000, () => {
  console.log("Application running on port 3000");
});