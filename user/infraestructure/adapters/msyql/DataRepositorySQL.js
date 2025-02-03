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
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password } = user;
                const query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
                const result = yield conn_1.db.execute(query, [username, email, password]);
                return result[0].insertId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT id, username, email, password FROM user WHERE email = ?";
                const [rows] = yield conn_1.db.execute(query, [email]);
                return rows[0];
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.DataRepositorySQL = DataRepositorySQL;
