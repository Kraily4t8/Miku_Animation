class Kirby {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet});
        //(spritesheet, xStart, yStart, refWidth, refHeight, frameCount, frameDuration, framePadding, reverse, loop)
        this.walkRight = new Animator(this.spritesheet, 4, 1, 24, 21, 10, 0.13, 0.1, false, true);
        this.tick = 0;
        this.xPos = 10;
    }

    update() {
        this.tick++;
        if(this.tick > 1) {
            this.xPos++;
            this.tick = 0;
        }
        if(this.xPos > 1024) {
            this.xPos = -30;
        }
    }

    draw(ctx) {
        // ctx.drawImage(this.spritesheet, 0,0);
        // ctx.drawImage(this.spritesheet, 5, 3, 20, 20, 10, 40, 50, 50);
        this.walkRight.drawFrame(this.game.clockTick, ctx, this.xPos, 700, 3);
    }
}