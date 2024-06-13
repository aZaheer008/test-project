import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Injectable()
export class HttpRequestServiceService {
    basicUrl = process.env.basicUrl;
    constructor(private readonly httpService: HttpService) {}

    async getRequest(route): Promise<CreateProductDto[]> {
        const url = `${this.basicUrl}/${route}`;
        console.log("---13-----url--- : ",url);
        const { data } = await firstValueFrom(
          this.httpService.get<CreateProductDto[]>(url).pipe(
            catchError((error: AxiosError) => {
              throw 'An error happened!';
            }),
          ),
        );
        return data;
      }
}
