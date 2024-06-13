import { Injectable } from '@nestjs/common';
import { HttpRequestServiceService } from 'src/shared/service/http-request-service/http-request-service.service';

@Injectable()
export class ProductsService {
  constructor(
    private readonly httpRequestservice : HttpRequestServiceService
  ) {}

  async findAll(queryParams) : Promise<any> {

    try {
      const route = `products?limit=${queryParams.limit}&skip=${queryParams.skip}`
      const result = await this.httpRequestservice.getRequest(route);
      return result;
    } catch (error) {
      throw error
    }
  }
}
