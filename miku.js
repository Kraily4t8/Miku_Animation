class Miku {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet});
        //(spritesheet, xStart, yStart, refWidth, refHeight, frameCount, frameDuration, framePadding, reverse, loop)
        this.idle = new Animator(this.spritesheet, 2, 1, 56, 64, 10, 0.2, 3, false, true);
        this.walkRight = new Animator(this.spritesheet, 2, 65, 75, 67, 8, 0.2, 2, false, true);
        this.jump = new Animator(this.spritesheet, 5, 134, 75, 100, 9, 0.23, 2.25, false, true);

        this.currentAnimator = this.jump;
        this.tickSum = 0;
        this.tick = 0;
        this.xPos = -40;
        this.yPos = 250;
        this.moveScale = 0.5;
        //loop length
    }

    update() {
        console.log(this.jump.currentFrame());
        this.tick++;
        this.tickSum++;
        if(this.xPos > 960) this.xPos = -240;
        if(this.tick > 2) {
            if(this.tickSum < 360) {
                switch(this.jump.currentFrame()) {
                    case 1: this.yPos -=2 * this.moveScale;
                        this.xPos +=2 * this.moveScale;
                        break;
                    case 2: this.yPos -=2 * this.moveScale;
                        this.xPos +=2.5 * this.moveScale;
                        break;
                    case 3: this.yPos -=2 * this.moveScale;
                        this.xPos +=2.5 * this.moveScale;
                        break;
                    case 4: this.yPos -=0 * this.moveScale;
                        this.xPos +=2.5 * this.moveScale;
                        break;
                    case 5: this.yPos +=3 * this.moveScale;
                        this.xPos +=2.5 * this.moveScale;
                        break;
                    case 6: this.yPos +=3 * this.moveScale;
                        this.xPos +=2.5 * this.moveScale;
                        break;
                    case 7: this.yPos +=0 * this.moveScale;
                        break;
                    case 8: this.yPos +=0 * this.moveScale;
                        break;
                }
            } else {
                this.currentAnimator = this.walkRight;
                this.xPos++;
            }
        }
    }

    draw(ctx) {
        if(this.currentAnimator == this.jump) {
            this.currentAnimator.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos, 3);
        } else if (this.currentAnimator == this.walkRight) {
            this.currentAnimator.drawFrame(this.game.clockTick, ctx, this.xPos-10, this.yPos + 100, 3);
        }
    }
}