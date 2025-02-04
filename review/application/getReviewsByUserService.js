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
exports.GetReviewsByUserService = void 0;
class GetReviewsByUserService {
    constructor(dataRespository) {
        this.dataRespository = dataRespository;
    }
    execute(id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield this.dataRespository.getReviewsByUser(id_user);
                if (reviews.length == 0) {
                    return {
                        message: "No hay notas del usuario",
                        reviews: []
                    };
                }
                return {
                    message: "Reseñas encontradas",
                    reviews: reviews
                };
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.GetReviewsByUserService = GetReviewsByUserService;
