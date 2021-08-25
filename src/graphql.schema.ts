
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateInput {
    name: string;
    description: string;
    filename: string;
    views: number;
    isPublished: boolean;
}

export class UpdateInput {
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    filename?: Nullable<string>;
    views?: Nullable<number>;
    isPublished?: Nullable<boolean>;
}

export abstract class IMutation {
    abstract create(dateCreate: createInput): Nullable<Photo> | Promise<Nullable<Photo>>;

    abstract update(dateUpdate: updateInput): Nullable<Photo> | Promise<Nullable<Photo>>;
}

export class Photo {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    filename?: Nullable<string>;
    views?: Nullable<number>;
    isPublished?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract show(id: number): Nullable<Photo> | Promise<Nullable<Photo>>;

    abstract delete(id: number): Nullable<Photo> | Promise<Nullable<Photo>>;

    abstract showAll(): Nullable<Nullable<Photo>[]> | Promise<Nullable<Nullable<Photo>[]>>;
}

type Nullable<T> = T | null;
