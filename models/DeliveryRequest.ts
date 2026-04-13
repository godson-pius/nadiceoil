import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IDeliveryRequest extends Document {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  liters: string;
  address: string;
  createdAt: Date;
}

const DeliveryRequestSchema = new Schema<IDeliveryRequest>({
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
  phone: {
    type: String,
    required: [true, 'Please provide your phone number.'],
    trim: true,
  },
  companyName: {
    type: String,
    required: [true, 'Please provide your company name.'],
    trim: true,
  },
  liters: {
    type: String,
    required: [true, 'Please provide the number of liters.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Please provide your delivery address.'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.DeliveryRequest || model<IDeliveryRequest>('DeliveryRequest', DeliveryRequestSchema);
