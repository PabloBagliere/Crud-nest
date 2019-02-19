/* tslint:disable */
export class CreateInput {
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
}

export class UpdateInput {
    id: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IMutation {
    abstract create(dateCreate: createInput): Photo | Promise<Photo>;

    abstract update(dateUpdate: updateInput): Photo | Promise<Photo>;
}

export class Photo {
    id?: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublished?: boolean;
}

export abstract class IQuery {
    abstract show(id: number): Photo | Promise<Photo>;

    abstract delete(id: number): Photo | Promise<Photo>;

    abstract showAll(): Photo[] | Promise<Photo[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
