"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureResponse = exports.successResponse = void 0;
const successResponse = (data) => {
    return { status: 'success', data: data };
};
exports.successResponse = successResponse;
const failureResponse = (errorMessage) => {
    return { status: 'fail', message: errorMessage };
};
exports.failureResponse = failureResponse;
//# sourceMappingURL=responseObject.js.map