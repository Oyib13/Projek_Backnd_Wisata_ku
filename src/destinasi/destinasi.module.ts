import { Module } from '@nestjs/common';
import { DestinasiController } from './destinasi.controller';
import { DestinasiService } from './destinasi.service';

@Module({
  controllers: [DestinasiController],
  providers: [DestinasiService],
})
export class DestinasiModule {}