import { useEffect, useState, useMemo } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Button, Container, Input, Typography } from "@mui/material";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      socket.emit("message", message);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <Container>
        <Typography variant="h2" gutterBottom>
          Live Chat
        </Typography>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button type="submit" variant="outlined">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
