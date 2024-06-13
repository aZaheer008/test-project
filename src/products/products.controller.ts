import { Controller, Get, Post,Query, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { productListingParams } from './dto/productListingParams.dto';
import { TokenGuardService } from 'src/shared/service/token-guard/token-guard.service';

@UseGuards(TokenGuardService)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll (@Query() queryParams: productListingParams) : Promise<CreateProductDto> {
    try {
      return this.productsService.findAll(queryParams); 
    } catch (error) {
      throw error;
    }
  }
}
