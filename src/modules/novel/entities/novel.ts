import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../user/entities/user';

export type NovelDocument = HydratedDocument<Novel>;

@Schema({ timestamps: true })
export class Novel {
  // 标题
  @Prop({ required: true, type: String })
  title: string;

  // 封面
  @Prop({ type: String })
  cover: string;
  
  // 摘要
  @Prop({ type: String })
  description: string;

  // 发起人
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  creater: User;

  // 话题
  @Prop([String])
  topics: string[];

  // 标签、分类 eg: time travel, RPG, Fantasy ..
  @Prop([String])
  tags: string[];

  @Prop({ type: Boolean, default: false })
  recommended: boolean;
}

export const NovelSchema = SchemaFactory.createForClass(Novel);