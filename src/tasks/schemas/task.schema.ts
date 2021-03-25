import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ timestamps: true })
export class Task {
  @Prop({
    type: String,
    required: [true, 'message не должно быть пустым'],
    trim: true,
  })
  message: string;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  fulfilled: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
