

var fx: Phaser.Sound;

var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", { 
    preload: () => {
        game.load.image("title", "assets/pics/catastrophi.png");
        game.load.spritesheet("button", "assets/buttons/flixel-button.png", 80, 20);
        game.load.bitmapFont("nokia", "assets/fonts/bitmapFonts/nokia16black.png", "assets/fonts/bitmapFonts/nokia16black.xml");

        game.load.audiosprite("sfx", "assets/audio/SoundEffects/fx_mixdown.ogg", (<any> audioJSON));
    }, 

    create: () => {
        game.add.image(0, 0, "title");
        //  Here we set-up our audio sprite
        fx = game.add.audio("sfx");
        fx.allowMultiple = true;

        //  And this defines the markers.
        //  They consist of a key (for replaying), the time the sound starts and the duration, both given in seconds.
        //  You can also set the volume and loop state, although we don"t use them in this example (see the docs)
        fx.addMarker("alien death", 1, 1.0);
        fx.addMarker("boss hit", 3, 0.5);
        fx.addMarker("escape", 4, 3.2);
        fx.addMarker("meow", 8, 0.5);
        fx.addMarker("numkey", 9, 0.1);
        fx.addMarker("ping", 10, 1.0);
        fx.addMarker("death", 12, 4.2);
        fx.addMarker("shot", 17, 1.0);
        fx.addMarker("squit", 19, 0.3);

        //  Make some buttons to trigger the sounds
        makeButtons("alien death", 600, 100);
        makeButtons("boss hit", 600, 140);
        makeButtons("escape", 600, 180);
        makeButtons("meow", 600, 220);
        makeButtons("numkey", 600, 260);
        makeButtons("ping", 600, 300);
        makeButtons("death", 600, 340);
        makeButtons("shot", 600, 380);
        makeButtons("squit", 600, 420);
    }
});

var audioJSON: any = {
    spritemap: {
        "alien death": {
            start: 1,
            end: 2,
            loop: false
        },
        "boss hit": {
            start: 3,
            end: 3.5,
            loop: false
        },
        "escape": {
            start: 4,
            end: 7.2,
            loop: false
        },
        "meow": {
            start: 8,
            end: 8.5,
            loop: false
        },
        "numkey": {
            start: 9,
            end: 9.1,
            loop: false
        },
        "ping": {
            start: 10,
            end: 11,
            loop: false
        },
        "death": {
            start: 12,
            end: 16.2,
            loop: false
        },
        "shot": {
            start: 17,
            end: 18,
            loop: false
        },
        "squit": {
            start: 19,
            end: 19.3,
            loop: false
        }
    }
};

function makeButtons(name: string, x: number, y: number) {

    var button: Phaser.Button = game.add.button(x, y, "button", clicks, this, 0, 1, 2);
    button.name = name;
    button.scale.set(2, 1.5);
    button.smoothed = false;

    var text: Phaser.BitmapText = game.add.bitmapText(x, y + 7, "nokia", name, 16);
    text.x += (button.width / 2) - (text.textWidth / 2);

}

function clicks(button: Phaser.Button) {
	fx.play(button.name);
}