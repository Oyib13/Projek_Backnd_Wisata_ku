import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateDestinasiDto} from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {

  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({
    status: 200,
    description: 'Daftar destinasi berhasil diambil',
  })
  findAll() {
    return [
      {
        id: 1,
        nama: 'Pantai Kuta Mandalika',
        kategori: 'Pantai',
        hargaTiket: 15000,
      },
      {
        id: 2,
        nama: 'Bukit Merese',
        kategori: 'Bukit',
        hargaTiket: 10000,
      },
    ];
  }

  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail destinasi' })
  @ApiResponse({
    status: 200,
    description: 'Detail destinasi berhasil diambil',
  })
  findOne(@Param('id') id: string) {
    return {
      id: Number(id),
      nama: 'Pantai Kuta Mandalika',
      kategori: 'Pantai',
      hargaTiket: 15000,
    };
  }

  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru' })
  @ApiResponse({
    status: 201,
    description: 'Destinasi berhasil dibuat',
  })
  @ApiResponse({
    status: 400,
    description: 'Data tidak valid',
  })
  create(@Body() dto: CreateDestinasiDto) {
    return {
      message: 'Destinasi berhasil dibuat',
      data: dto,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah data destinasi' })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil diperbarui',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return {
      message: 'Destinasi berhasil diperbarui',
      id: Number(id),
      data: dto,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi' })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil dihapus',
  })
  remove(@Param('id') id: string) {
    return {
      message: 'Destinasi berhasil dihapus',
      id: Number(id),
    };
  }
}