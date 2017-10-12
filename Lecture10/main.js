"use strict";
exports.__esModule = true;
var myapp_1 = require("./myapp");
var likeComponent = new myapp_1.LikeComponent(10, true);
console.log("LikeCount before onClick is " + likeComponent.likesCount);
likeComponent.onclick();
console.log("LikeCount after onClick is " + likeComponent.likesCount);
