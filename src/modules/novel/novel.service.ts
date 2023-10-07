import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Novel } from "./entities/novel";
import { Model, Schema as MongooseSchema } from "mongoose";
import { QueryNovelDto } from "./dto/queryNovel.dto";

@Injectable()
export class NovelService {
  constructor(@InjectModel('Novel') private readonly novelModel: Model<Novel>) { }

  async createNovel(data: Novel) {
    try {
      return this.novelModel.create(data);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async getNovelById(id: MongooseSchema.Types.ObjectId) {
    
    try {
      return this.novelModel.findById(id);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async queryNovels(queryNovelDto: QueryNovelDto) {
    const query: Record<string, any> = {};
    if (queryNovelDto.recommended) {
      query.recommended = true;
    }
    if (queryNovelDto.tags?.length) {
      query.tags = {
        $in: queryNovelDto.tags,
      };
    }
    try {
      return this.novelModel.find(query);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
}