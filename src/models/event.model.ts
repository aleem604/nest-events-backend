import { PartialType } from '@nestjs/mapped-types';

export class EventModel {
  id: number;
  name: string;
  description?: string;
  when?: Date;
  address?: string;
}

export class UpdateEventModel extends PartialType(EventModel) {}
