import { model, Schema } from 'mongoose';
import { category, label, location } from './cow.constant';
import { CowModel, ICow } from './cow.interface';

export const CowSchema = new Schema<ICow, CowModel>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      enum: location,
    },
    breed: {
      type: String,
    },
    weight: {
      type: Number,
      required: true,
    },
    label: {
      type: String,
      enum: label,
    },
    category: {
      type: String,
      enum: category,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Cow = model<ICow, CowModel>('Cow', CowSchema);
