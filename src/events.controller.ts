import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import type { EventModel, UpdateEventModel } from './models/event.model';

@Controller({ path: '/events', version: '1' })
export class EventsController {
  private events: Array<EventModel> = [];

  @Get()
  findAll(): any[] {
    return this.events;
  }

  @Get(':id')
  findOne(@Param('id') id: number): EventModel {
    return this.events.find((event) => event.id == id) ?? ({} as EventModel);
  }

  @Post()
  create(@Body() input: EventModel): any[] {
    input.id = this.events.length + 1;
    this.events.push(input);
    return this.events;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventModel) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    this.events.splice(
      this.events.findIndex((event) => event.id == id),
      1,
    );
    return this.events;
  }
}
