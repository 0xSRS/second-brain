import { Schema } from "mongoose";
interface IUser {
    email: string;
    name: string;
    password: string;
}
export declare const UserModel: import("mongoose").Model<IUser, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, IUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<IUser, import("mongoose").Model<IUser, any, any, any, (import("mongoose").Document<unknown, any, IUser, any, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, IUser, any, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, IUser>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUser, import("mongoose").Document<unknown, {}, IUser, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    email?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    password?: import("mongoose").SchemaDefinitionProperty<string, IUser, import("mongoose").Document<unknown, {}, IUser, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IUser>, IUser>;
export {};
//# sourceMappingURL=UserModel.d.ts.map