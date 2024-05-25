import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [PrismaModule, UserModule, BookmarkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
