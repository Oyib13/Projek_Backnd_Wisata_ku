import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Min,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDestinasiDto {
  @ApiProperty({
    example: 'Pantai Kuta Mandalika',
  })
  @IsString()
  @IsNotEmpty()
  nama: string;

  @ApiProperty({
    example: 'Pantai',
  })
  @IsString()
  @IsNotEmpty()
  kategori: string;

  @ApiPropertyOptional({
    example: 'Kuta, Lombok Tengah',
  })
  @IsString()
  @IsOptional()
  lokasi?: string;

  @ApiProperty({
    example: 15000,
  })
  @IsNumber()
  @Min(0)
  hargaTiket: number;
}