import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import { initializeSocket } from "./config/socket.js";
import cors from "cors";
const app = express();
const port = 5000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }),
);
// Create HTTP server using Express app
const httpServer = createServer(app);

// Attach Socket.IO to HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/", (_req, res) => {
  res.send("Server is Health and Running");
});

initializeSocket(io);

httpServer.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
