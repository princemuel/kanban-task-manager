import * as mongoose from 'mongoose';
import { green, purple, warning } from 'server/utilities';

const DB_URI = process.env.MONGODB_URI as string;

const connection: any = {};
export async function connectDB() {
  if (connection.isConnected) {
    console.log(warning('☹️ The database is already connected'));
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log(warning('🤪 Using the previous database connection'));
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(DB_URI);
  console.log(green('?😊 Your MongoDB Database Has Connected Successfully'));
  connection.isConnected = db.connections[0].readyState;
}

export async function disconnectDB() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log(purple('😢The database is not yet disconnected'));
    }
  }
}
