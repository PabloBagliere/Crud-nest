import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
    constructor(
        @InjectConnection()
        private readonly con : Connection,
        @InjectRepository(Photo)
        private readonly photoRepository : Repository<Photo>
    ) { }

    async findAll(): Promise<Photo[]> {
        return await this.photoRepository.find();
    }

    async fingOneByid(id: number) {
        return await this.photoRepository.findOne(id);
    }

    async createPhoto(date : Photo): Promise<Photo> {
        return await this.con.getRepository(Photo).save(date);
    }

    async UpdatePhoto(id : number): Promise<Photo> {
        return await this.con.getRepository(Photo).save(date);
    }
}
