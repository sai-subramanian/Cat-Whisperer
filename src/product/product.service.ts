import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from './product.provider';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { addProductDto, updateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private ProductRepository: Repository<Product>,
  ) {}

  async getProducts(productId: string) {
    const product = await this.ProductRepository.findOne({
      where: { id: productId },
    });

    return product;
  }

  async addProduct(request: addProductDto) {
    const product = new Product();
    Object.assign(product, request);
    product.createdAt = new Date();

    await this.ProductRepository.save(product);

    return product;
  }

  async updateProduct(request: updateProductDto, productId: string) {
    // const productToUpdate = await this.ProductRepository.findOne({where:{id:productId}})

    this.ProductRepository.update({ id: productId }, request);
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
