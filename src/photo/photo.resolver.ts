import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { PhotoService } from "./photo.service";
import { Photo } from "./photo.entity";
@Resolver('photo')
export class photoResolver {
    constructor (
        private readonly photoService: PhotoService
    ) { }

    @Query()
    async photo(@Args('id') id: number){
        return await this.photoService.fingOneByid(id);
    };

    @Mutation('CreatePhoto')
    async createPhoto(@Args('CreatePhotoInput') Args: Photo) : Promise<Photo> {
        return await this.photoService.createPhoto(Args);
    };

    @Mutation('UpdatePhoto')
    async UpdatePhoto(@Args('id') id: Number) : Promise<Photo> {
        return await this.photoService.createPhoto(Args);
    }

}