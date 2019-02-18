/* tslint:disable */
export class CreatePhotoInput {
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IMutation {
    abstract CreatePhoto(CreatePhotoInput?: CreatePhotoInput): Photo | Promise<Photo>;
}

export class Photo {
    id: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IQuery {
    abstract photo(id: number): Photo | Promise<Photo>;

    abstract temp__(): boolean | Promise<boolean>;
}
