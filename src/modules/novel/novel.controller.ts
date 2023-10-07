import { BadRequestException, Controller, Get, NotFoundException, Param, Post, Query, Req } from "@nestjs/common";
import { NovelService } from "./novel.service";
import { QueryNovelDto } from "./dto/queryNovel.dto";
import { GetSingleNovelDto } from "./dto/getSingleNovel.dto";
import { Request } from 'express';

@Controller('novel')
export class NovelController {
  constructor(private novelService: NovelService) { }

  @Get()
  async queryNovel(@Query() queryNovelDto: QueryNovelDto) {
    try {
      return this.novelService.queryNovels(queryNovelDto);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Get('/:id')
  async getSingleNovel(@Param('id') id: GetSingleNovelDto['id']) {
    try {
      const row = await this.novelService.getNovelById(id);
      if (!row) {
        throw new NotFoundException();
      }
      return row;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Post()
  async createNovel(@Req() req: Request) {
    return this.novelService.createNovel({
      ...req.body,
      creater: '65219c585ba5c5ed02b47afd', // fake user
    })
  }
}