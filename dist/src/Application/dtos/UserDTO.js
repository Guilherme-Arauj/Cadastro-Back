"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDTO = exports.UserResponseDTO = exports.UserDTO = void 0;
class UserDTO {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
exports.UserDTO = UserDTO;
class UserResponseDTO {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
}
exports.UserResponseDTO = UserResponseDTO;
class UserLoginDTO {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.UserLoginDTO = UserLoginDTO;
