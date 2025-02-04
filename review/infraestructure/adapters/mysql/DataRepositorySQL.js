"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRepositorySQL = void 0;
const conn_1 = require("../../../../shared/mysql/application/conn");
class DataRepositorySQL {
    postReview(id_user, review) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "INSERT INTO review (id_user, book_title, book_author, rating, description) VALUES (?, ?, ?, ?, ?)";
                const result = yield conn_1.db.execute(query, [id_user, review.book_title, review.book_author, review.rating, review.description]);
                return result[0].insertId;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    getReviewsByUser(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, id_user, book_title, book_author, rating, description FROM review WHERE id_user = ? ";
                const [results] = yield conn_1.db.execute(query, [id_user]);
                return results;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.DataRepositorySQL = DataRepositorySQL;
