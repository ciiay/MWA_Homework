import { LikeComponent } from './myapp';

let likeComponent = new LikeComponent(10, true);
console.log("LikeCount before onClick is " + likeComponent.likesCount);
likeComponent.onclick();
console.log("LikeCount after onClick is " + likeComponent.likesCount);
