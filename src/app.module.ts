import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { HttpRequestServiceService } from './shared/service/http-request-service/http-request-service.service';
import { HttpModule } from '@nestjs/axios';
import { TokenGuardService } from './shared/service/token-guard/token-guard.service';
import { JwtModule,JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


// console.log("-------process.env.JwtSecret--- : ",ConfigService.get<string>('JwtSecret'));

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ProductsModule,
    HttpModule,
    PassportModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, HttpRequestServiceService, TokenGuardService,JwtService ],
})
export class AppModule {}
