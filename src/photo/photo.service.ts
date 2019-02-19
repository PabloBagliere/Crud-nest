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
    };

    async delete(id: number) {
        return await this.photoRepository.remove(await this.photoRepository.findOne(id));
    }

    async show(id: number) {
        return await this.photoRepository.findOne(id);
    }

    async create(date : Photo): Promise<Photo> {
        return await this.con.getRepository(Photo).save(date);
    }

    async update(date : Photo): Promise<Photo> {
        let update : Photo = await this.show(date.id);
        if(date.name != update.name && date.name != null) update.name = date.name;
        if(date.description != update.description && date.description != null) update.description = date.description;
        if(date.filename != update.filename && date.filename != null) update.filename = date.filename;
        if(date.views != update.views && date.views != null) update.views = date.views;
        if(date.isPublished != update.isPublished && date.isPublished != null) update.isPublished = date.isPublished;
        return await this.con.getRepository(Photo).save(update);
    }
}
