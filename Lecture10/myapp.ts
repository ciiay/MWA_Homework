
    export class LikeComponent {
        likesCount: number;
        active: boolean;

        constructor(likesCount: number, active: boolean){
            this.likesCount = likesCount;
            this.active = active;
        }

        onclick() {
            if(this.active == false)
                this.likesCount ++;
            else
                this.likesCount --;
        }
        
    }
