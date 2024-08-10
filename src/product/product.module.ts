import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductRepository } from './product.provider';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
