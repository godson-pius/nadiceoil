import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    lowercase: true,
    trim: true,
  },
  subject: {
    type: String,
    required: [true, 'Please provide a subject.'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please provide your message.'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Contact || model<IContact>('Contact', ContactSchema);
