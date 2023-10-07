import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  // username
  @Prop({ required: true, unique: true, type: String })
  name: string;
  
  // user avatar url
  @Prop({ type: String })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);