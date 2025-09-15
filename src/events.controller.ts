import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller({ path: '/events', version: '1' })
export class EventsController {
  @Get()
  findAll(): any[] {
    return [
      { id: 1, name: 'Event 1' },
      { id: 2, name: 'Event 2' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return 'List of events' + id;
  }

  @Post()
  create(): string {
    return 'Create event';
  }

  @Put()
  update(): string {
    return 'Create event';
  }

  @Delete(':id')
  remove(id: string): string {
    return 'Create event' + id;
  }
}
