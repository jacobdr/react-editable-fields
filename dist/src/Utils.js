"use strict";
var React = require('react');
exports.getProperty = function (path, obj, safe) {
    if (safe === void 0) { safe = true; }
    return path.split('.').reduce(function (prev, curr) {
        return !safe ? prev[curr] : (prev ? prev[curr] : undefined);
    }, obj || self);
};
exports.Centered = function (_a) {
    var children = _a.children;
    return (React.createElement("div", {style: { height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}, children));
};
//# sourceMappingURL=Utils.js.map