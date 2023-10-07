import { IsOptional } from 'class-validator';

export class QueryNovelDto {
  @IsOptional()
  tags: string[];

  @IsOptional()
  recommended: boolean;
}