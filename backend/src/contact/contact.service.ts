// src/contact/contact.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto) {
    console.log("SERVICE DATA:", data);

    return this.prisma.contact.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.contact.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }
}