"use strict";
exports.__esModule = true;
var Table = function (_a) {
    var words = _a.words;
    return (React.createElement("div", { className: "table" },
        React.createElement("h3", null, "Words:"),
        React.createElement("ul", null, words.map(function (result) { return (React.createElement("li", { key: result }, result)); }))));
};
exports["default"] = Table;
