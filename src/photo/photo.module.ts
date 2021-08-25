import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { photoResolver } from './photo.resolver';
;

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService, photoResolver]
})
export class PhotoModule {}
