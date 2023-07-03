interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}
export interface Social extends SanityBody {
    _type: "social";
    title: string;
}