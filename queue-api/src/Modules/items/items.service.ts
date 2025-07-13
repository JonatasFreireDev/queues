import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        ...createItemDto,
        status: {
          create: {
            isActive: true,
          },
        },
    });
  }

  async findAll() {
    return this.prisma.item.findMany();
  }

  async findOne(id: string) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({
      where: { id },
      data: updateItemDto,
    });
  }

  async remove(id: string) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
