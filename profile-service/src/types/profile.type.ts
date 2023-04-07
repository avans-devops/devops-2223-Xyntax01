export type TProfile = {
    _id: string;
    email: string;
    targets: TTarget[]
}

export type TTarget = {
    _id: String;
    user: TUser
    image: TImage;
    location: TLocation;
    participants: TParticipant[];
    created_at: Date;
}

export type TUser = {
    _id: string;
    email: string
}

export type TImage = {
    _id: String;
    data: Buffer;
    immagaId: string;
}

export type TLocation = {
    _id: String;
    long: number;
    lat: number
}

export type TParticipant = {
    _id: String;
    user: TUser;
    email: string;
    image: TImage;
    score: number;
}