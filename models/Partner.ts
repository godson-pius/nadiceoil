import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IPartner extends Document {
  name: string;
  logoUrl?: string;
  createdAt: Date;
}

const PartnerSchema = new Schema<IPartner>({
  name: { type: String, required: true },
  logoUrl: { type: String, required: false, default: "" },
  createdAt: { type: Date, default: Date.now },
});

// Prevent Next.js hot-reload from using the old cached schema
if (models.Partner) {
  delete models.Partner;
}

export default model<IPartner>('Partner', PartnerSchema);

