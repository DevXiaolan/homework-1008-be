import { IsNotEmpty, IsMongoId } from 'class-validator';
import { Schema } from 'mongoose';

export class GetSingleNovelDto {
  @IsNotEmpty()
  @IsMongoId()
  id: Schema.Types.ObjectId;
}