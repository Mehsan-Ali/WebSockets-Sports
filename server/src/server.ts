import express from "express";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is Health and Running");
});

app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
