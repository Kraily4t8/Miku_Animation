class Miku {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet});
        //(spritesheet, xStart, yStart, refWidth, refHeight, frameCount, frameDuration, framePadding, reverse, loop)
        this.idle = new Animator(this.spritesheet, 2, 1, 56, 64, 10, 0.2, 3, false, true);
        this.walkRight = new Animator(this.spritesheet, 2, 65, 75, 67, 8, 0.2, 2, false, true);

        this.jump = new Animator(this.spritesheet, 5, 134, 75, 100, 9, 0.3, 2.125, false, true);
        // this.fall = new Animator(this.spritesheet, 313, 134, 75, 100, 4, 0.5, this.frameDuration, false, true);
        this.tick = 0;
        this.xPos = 400;
        this.yPos = 250;
        //loop length
    }

    update() {
        // determine amount of time of the start up jump
        console.log(this.jump.currentFrame());
        this.tick++;
        if(this.xPos > 980) this.xPos = -200;
        if(this.tick > 2) {
            switch(this.jump.currentFrame()) {
                case 1: this.yPos -=2;
                        this.xPos +=2;
                    break;
                case 2: this.yPos -=2;
                this.xPos +=2.5;
                    break;
                case 3: this.yPos -=2;
                this.xPos +=2.5;
                    break;
                case 4: this.yPos -=0;
                this.xPos +=2.5;
                    break;
                case 5: this.yPos +=3;
                this.xPos +=2.5;
                    break;
                case 6: this.yPos +=3;
                this.xPos +=2.5;
                    break;
                case 7: this.yPos +=0;
                    break;
                case 8: this.yPos +=0;
                    break;
            }
            this.tick = 0;
        }
    }

    draw(ctx) {
        this.jump.drawFrame(this.game.clockTick, ctx, this.xPos, this.yPos, 3);
    }
}