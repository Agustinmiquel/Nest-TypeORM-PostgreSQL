import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDTO {

    @IsOptional()
    @IsPositive()
    @Type(()=> Number)
    // Lo transformamos a numero
    limit?: number;

    @IsOptional()
    @Type(()=> Number)
    offset?:number;
}