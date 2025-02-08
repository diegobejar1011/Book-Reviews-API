export type ReviewReq = {
    book_title: string;
    book_author: string;
    rating: number;
    description: string;
    image: string | null;
};