import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @IsString()
  @IsIn(['men', 'women', 'kid'])
  gender: string;

  @IsString({ each: true })
  @IsArray()
  tags?:string[];
}
