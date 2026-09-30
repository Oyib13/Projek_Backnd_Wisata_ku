import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // GET /destinasi
  async findAll(kategori?: string) {
    return this.prisma.destinasi.findMany({
      where: kategori
        ? { kategori }
        : undefined,

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // GET /destinasi/:id
  async findOne(id: number) {
    const destinasi =
      await this.prisma.destinasi.findUnique({
        where: {
          id,
        },
      });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan id ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }

  // POST /destinasi
  async create(dto: CreateDestinasiDto) {
    return this.prisma.destinasi.create({
      data: dto,
    });
  }

  // PATCH /destinasi/:id
  async update(
    id: number,
    dto: UpdateDestinasiDto,
  ) {
    // Pastikan data tersedia terlebih dahulu
    await this.findOne(id);

    return this.prisma.destinasi.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  // DELETE /destinasi/:id
  async remove(id: number) {
    // Pastikan data tersedia terlebih dahulu
    await this.findOne(id);

    await this.prisma.destinasi.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Destinasi berhasil dihapus',
    };
  }
}