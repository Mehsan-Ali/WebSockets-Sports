import "./App.css";
import { io } from "socket.io-client";
function App() {
  const socket = io("http://localhost:5000");
  socket.on("connect", () => {
    console.log("Connected", socket.id);
  });
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
