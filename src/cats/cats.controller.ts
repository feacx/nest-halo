import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): { name: string }[] {
    return [
      { name: 'This action returns all cats' },
      { name: 'This action returns all cats' },
    ];
  }

  @Get(':id')
  getDetail(@Param('id') id: string): { id: number; name: string } {
    return { id: Number(id), name: `my is sweety cats` };
  }

  @Get('docs')
  getDocs(): { url: string } {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
