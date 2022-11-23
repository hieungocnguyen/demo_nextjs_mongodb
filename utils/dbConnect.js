import mongoose from "mongoose";
const connection = {};

async function dbConnect() {
   if (connection.isConnected) {
      return;
   }
   const db = await mongoose.connect(
      "mongodb+srv://ngnohieu:Ngochieu2001@cluster0.gb71xpy.mongodb.net/?retryWrites=true&w=majority",
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   );

   connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
