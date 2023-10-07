import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { NovelController } from './novel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NovelSchema } from './entities/novel';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Novel', schema: NovelSchema }])],
  providers: [NovelService],
  controllers: [NovelController],
})
export class NovelModule { }
