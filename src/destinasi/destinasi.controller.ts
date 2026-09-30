import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  HttpCode,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

import { DestinasiService } from './destinasi.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(
    private readonly destinasiService: DestinasiService,
  ) {}

  @Get()
  @ApiOperation({
    summary:
      'Menampilkan daftar destinasi, dapat difilter berdasarkan kategori',
  })
  findAll(@Query('kategori') kategori?: string) {
    return this.destinasiService.findAll(kategori);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Menampilkan detail destinasi berdasarkan ID',
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Menambahkan destinasi baru',
  })
  @ApiBody({
    type: CreateDestinasiDto,
  })
  create(@Body() dto: CreateDestinasiDto) {
    return this.destinasiService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Mengubah data destinasi',
  })
  @ApiBody({
    type: UpdateDestinasiDto,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Menghapus destinasi',
  })
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.remove(id);
  }
}