import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({
    type: String,
    required: [true, 'massage не должно быть пустым'],
    trim: true,
  })
  massage: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  fulfilled: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
