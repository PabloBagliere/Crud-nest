import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { PhotoService } from "./photo.service";
import { Photo } from "./photo.entity";
@Resolver('photo')
export class photoResolver {
    constructor (
        private readonly photoService: PhotoService
    ) { }

    @Query()
    async show(@Args('id') id: number){
        return await this.photoService.show(id);
    };

    @Query()
    async delete(@Args('id') id: number){
        return await this.photoService.delete(id);
    };

    @Query()
    async showAll(){
        return await this.photoService.findAll();
    };

    @Mutation('create')
    async create(@Args('dateCreate') Args: Photo) : Promise<Photo> {
        return await this.photoService.create(Args);
    };

    @Mutation('update')
    async update(@Args('dateUpdate') Args: Photo) : Promise<Photo> {
        return await this.photoService.update(Args);
    }

}