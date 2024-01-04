class Kirby {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y, spritesheet});
        //(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
        this.walkRight = new Animator(this.spritesheet, 8, 54, 23, 20, 10, 0.5, 0, false, true);
        this.additive = 0;
        this.iteration = 0;

        this.sw = 23;
    }

    update() {

    }

    draw(ctx) {
        this.walkRight.drawFrame(this.game.clockTick, ctx, 10, 10, 3);
        this.test(ctx);
        this.iteration++;
        if(this.iteration > 20) {
            this.additive++;
            this.iteration = 0;
            if(this.additive == 10) this.additive = 0;
        }
    }
    
    test(ctx) {
        // ctx.drawImage(imgsource, sx, sy, sw, sh, dx, dy, dw, dh):

        ctx.drawImage(this.spritesheet, 
            9 + this.sw * this.additive, 55, 
            this.sw, 23,
            10, 80,
            50, 50);
    }
}