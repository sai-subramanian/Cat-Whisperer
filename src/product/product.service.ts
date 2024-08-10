import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.provider';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { addProductDto, updateProductDto } from './dto/product.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private ProductRepository: Repository<Product>,
  ) {}

  async getProducts(productId: string) {
    try {
      const product = await this.ProductRepository.findOne({
        where: { id: productId },
      });

      return product;
    } catch (e) {
      throw Error(e);
    }
  }

  async addProduct(request: addProductDto) {
    try {
      const product = new Product();
      Object.assign(product, request);
      product.id = uuidv4();
      product.createdAt = new Date();
      product.isActive = true;
      await this.ProductRepository.save(product);

      return product;
    } catch (e) {
      throw Error(e);
    }
  }

  async updateProduct(request: updateProductDto, productId: string) {
    try {
      // const productToUpdate = await this.ProductRepository.findOne({where:{id:productId}})

      this.ProductRepository.update({ id: productId }, request);
    } catch (e) {
      throw Error(e);
    }
  }

  async deleteProduct(productId: string) {
    try {
      const productToDelete = await this.ProductRepository.findOne({
        where: { id: productId },
      });

      productToDelete.isActive = false;

      return await this.ProductRepository.update(
        { id: productToDelete.id },
        productToDelete,
      );
    } catch (e) {
      throw Error(e);
    }
  }
}
