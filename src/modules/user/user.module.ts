import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class UserModule {}
