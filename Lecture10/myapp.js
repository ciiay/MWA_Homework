"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likesCount, active) {
        this.likesCount = likesCount;
        this.active = active;
    }
    LikeComponent.prototype.onclick = function () {
        if (this.active == false)
            this.likesCount++;
        else
            this.likesCount--;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
