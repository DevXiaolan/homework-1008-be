import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { NovelModule } from './modules/novel/novel.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return configService.getMongoConfig();
      },
    }),
    NovelModule,
    UserModule,
    // modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
