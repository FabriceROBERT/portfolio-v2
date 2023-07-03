const express = require("express");

const app = express();

app.get("/api/hello.ts", (req, res) => {
  res.json({ name: "John Doe" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
