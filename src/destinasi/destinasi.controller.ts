import { Controller, Get } from '@nestjs/common';

@Controller('destinasi')
export class DestinasiController {

  @Get()
  findAll() {
    return [
      'Pantai Kuta',
      'Bukit Merese',
      'Pantai Tanjung Aan'
    ];
  }

}