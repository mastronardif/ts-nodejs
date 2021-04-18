"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        requered: true
    },
    email: {
        type: String,
        requered: true
    },
    password: {
        type: String,
        requered: true
    }
});
userSchema.statics.build = function (attr) {
    return new User(attr);
};
var User = mongoose_1.default.model('User', userSchema);
exports.User = User;
User.build({
    name: 'some title',
    email: 'some description',
    password: 'asdf'
});
