import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { HttpModule } from '@nestjs/axios';
import { HttpRequestServiceService } from 'src/shared/service/http-request-service/http-request-service.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [HttpModule],
  controllers: [ProductsController],
  providers: [ProductsService,HttpRequestServiceService,JwtService]
})
export class ProductsModule {}
