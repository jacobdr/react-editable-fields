"use strict";
exports.getProperty = function (path, obj, safe) {
    if (safe === void 0) { safe = true; }
    return path.split('.').reduce(function (prev, curr) {
        return !safe ? prev[curr] : (prev ? prev[curr] : undefined);
    }, obj || self);
};
//# sourceMappingURL=Utils.js.map