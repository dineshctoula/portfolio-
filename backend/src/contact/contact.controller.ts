import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() body: CreateContactDto) {
    console.log("BODY RECEIVED:", body);
    return this.contactService.create(body);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}