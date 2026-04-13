import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IPartner extends Document {
  name: string;
  logoUrl: string;
  createdAt: Date;
}

const PartnerSchema = new Schema<IPartner>({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default models.Partner || model<IPartner>('Partner', PartnerSchema);
