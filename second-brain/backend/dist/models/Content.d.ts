import mongoose from "mongoose";
export declare const ContentModel: mongoose.Model<{
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        type: "youtube" | "twitter";
        userId: mongoose.Types.ObjectId;
        link?: string | null;
        title?: string | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        type: "youtube" | "twitter";
        userId: mongoose.Types.ObjectId;
        link?: string | null;
        title?: string | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "youtube" | "twitter";
    userId: mongoose.Types.ObjectId;
    link?: string | null;
    title?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Content.d.ts.map