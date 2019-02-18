import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { join } from 'path';

@Module({
  imports: [TypeOrmModule.forRoot(),
    PhotoModule,
    GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.schema.ts'),
      outputAs: 'class',
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
