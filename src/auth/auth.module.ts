import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { TokenGuardService } from 'src/shared/service/token-guard/token-guard.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const jwtSecret = configService.get<string>('JwtSecret');
        return {
          secret: jwtSecret,
          signOptions: {
            expiresIn: configService.get<string>('JwtExpiresIn'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: TokenGuardService,
    }],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}