import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
  createdAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  content: { type: String, required: true },
  rating: { type: Number, default: 5 },
  avatarUrl: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

export default models.Testimonial || model<ITestimonial>('Testimonial', TestimonialSchema);
