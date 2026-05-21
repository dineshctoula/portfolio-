import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  create(@Body() body: CreateContactDto) {
    return this.contactService.create(body);
    //  yesle database ma data save garxa 
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
    // yesle database ma vako sabai contact haru lai find garxa ra order by createdAt desc garxa
  }
}