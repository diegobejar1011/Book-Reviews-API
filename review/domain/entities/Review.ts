export type Review = {
    id: number;
    id_user: number;
    book_title: string;
    book_author: string;
    rating: number;
    description: string;
    image: string | null;
    created_at: Date;
    updated_at: Date;
};