import { Schema, Types } from "mongoose";
interface IContent {
    title: string;
    link: string;
    type: "youtube" | "X";
    description?: string;
    userId: Types.ObjectId;
}
export declare const ContentModel: import("mongoose").Model<IContent, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, IContent, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<IContent, import("mongoose").Model<IContent, any, any, any, (import("mongoose").Document<unknown, any, IContent, any, import("mongoose").DefaultSchemaOptions> & IContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, IContent, any, import("mongoose").DefaultSchemaOptions> & IContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
}), any, IContent>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IContent, import("mongoose").Document<unknown, {}, IContent, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, IContent, import("mongoose").Document<unknown, {}, IContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    link?: import("mongoose").SchemaDefinitionProperty<string, IContent, import("mongoose").Document<unknown, {}, IContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    type?: import("mongoose").SchemaDefinitionProperty<"youtube" | "X", IContent, import("mongoose").Document<unknown, {}, IContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, IContent, import("mongoose").Document<unknown, {}, IContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: import("mongoose").SchemaDefinitionProperty<Types.ObjectId, IContent, import("mongoose").Document<unknown, {}, IContent, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<IContent & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IContent>, IContent>;
export {};
//# sourceMappingURL=ContentModel.d.ts.map