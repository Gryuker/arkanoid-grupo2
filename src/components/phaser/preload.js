import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" });
  }

  preload() {
    this.load.audio("musica", "/assets/sounds/BGM-Echelon.mp3");
    this.load.image("fondo", "/assets/images/arkanoid/background.png");
    this.load.image("nave", "/assets/images/arkanoid/platform.png");
    this.load.image("bola", "/assets/images/arkanoid/ball.png");
    this.load.image("ladrilloNegro", "/assets/images/arkanoid/brickBlack.png");
    //acá irían el sprite de la nave y los botones
    /* this.load.spritesheet('dude',
            'img/dude.png',
            { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('bird',
            'img/birdSprite.png',
            { frameWidth: 16, frameHeight: 16 }); */
    //acá van todos los audios
    this.load.audio('impactoNaveSample', '/assets/sounds/click.wav');
  }

  create() {
    this.scene.start("Play");
  }
}

export default Preload;
