export const initializeSocket = (io: any) => {
  io.on("connection", (socket: any) => {
    console.log("User connected:", socket.id);

    socket.on("message", (data: any) => {
      console.log("User Message:", data);
    });
    
    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });
};
