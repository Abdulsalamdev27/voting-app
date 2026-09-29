import dotenv from "dotenv";
import { connectDatabase } from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  await connectDatabase();

  console.log(`Server running on port ${PORT}`);
};

startServer();