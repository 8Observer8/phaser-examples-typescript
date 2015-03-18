var _this = this;
var i = 0;
var bmd;
var colors;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
    create: function () {
        bmd = game.add.bitmapData(800, 600);
        game.add.sprite(0, 0, bmd);
        colors = Phaser.Color.HSVColorWheel();
        game.input.addMoveCallback(function (pointer, x, y) {
            if (pointer.isDown) {
                bmd.circle(x, y, 16, colors[i].rgba);
                i = game.math.wrapValue(i, 1, 359);
            }
        }, _this);
    }
});
