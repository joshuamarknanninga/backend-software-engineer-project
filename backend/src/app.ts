import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

export default app;
