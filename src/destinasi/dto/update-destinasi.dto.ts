import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

import {
  ApiPropertyOptional,
} from '@nestjs/swagger';

export class UpdateDestinasiDto {
  @ApiPropertyOptional({
    example: 'Pantai Kuta Mandalika',
  })
  @IsString()
  @IsOptional()
  nama?: string;

  @ApiPropertyOptional({
    example: 'Pantai',
  })
  @IsString()
  @IsOptional()
  kategori?: string;

  @ApiPropertyOptional({
    example: 'Kuta, Lombok Tengah',
  })
  @IsString()
  @IsOptional()
  lokasi?: string;

  @ApiPropertyOptional({
    example: 20000,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  hargaTiket?: number;
}