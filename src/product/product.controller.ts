import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { addProductDto, updateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getProducts(@Param() productId: string) {
    try {
      return await this.productService.getProducts(productId);
    } catch (e) {
      return Error(e);
    }
  }

  @Post()
  async addProducts(@Body() request: addProductDto) {
    try {
      return await this.productService.addProduct(request);
    } catch (e) {
      return Error(e);
    }
  }

  @Post()
  async updateProducts(
    @Param() productId: string,
    @Body() request: updateProductDto,
  ) {
    try {
      return await this.productService.updateProduct(request, productId);
    } catch (e) {
      return Error(e);
    }
  }

  @Delete()
  async deleteProducts(@Param() productId:string) {
    try {
        return await this.productService.deleteProduct(productId);
      } catch (e) {
        return Error(e);
      }
  }
}
