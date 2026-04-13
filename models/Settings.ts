import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ISettings extends Document {
  dieselPrice: number;
  phone: string;
  email: string;
  address: string;
  mission: string;
  vision: string;
  coreValues: string;
  updatedAt: Date;
}

const SettingsSchema = new Schema<ISettings>({
  dieselPrice: { type: Number, default: 0 },
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  mission: { type: String, default: '' },
  vision: { type: String, default: '' },
  coreValues: { type: String, default: '' },
  updatedAt: { type: Date, default: Date.now },
});

export default models.Settings || model<ISettings>('Settings', SettingsSchema);
