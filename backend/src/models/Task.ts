import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  completed: boolean;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

export default model<ITask>('Task', TaskSchema);
