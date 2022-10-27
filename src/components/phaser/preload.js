import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" });
  }

  preload() {
    this.load.audio("musica", "/assets/sounds/BGM-Echelon.mp3");
    this.load.image("fondo", "/assets/images/arkanoid/background.png");
    this.load.spritesheet('nave', '/assets/images/arkanoid/nave.png', { frameWidth: 97, frameHeight: 26 });
    //this.load.image("nave", "/assets/images/arkanoid/platform.png");
    this.load.image("bola", "/assets/images/arkanoid/ball.png");
    this.load.image("bloqueNegro", "/assets/images/arkanoid/brickBlack.png");
    this.load.image("bloqueAzul", "/assets/images/arkanoid/brickBlue.png");
    this.load.image("bloqueVerde", "/assets/images/arkanoid/brickGreen.png");
    this.load.image("bloqueGris", "/assets/images/arkanoid/brickGrey.png");
    this.load.image("bloqueNaranja", "/assets/images/arkanoid/brickOrange.png");
    this.load.image("bloqueBlanco", "/assets/images/arkanoid/brickWhite.png");
    this.load.image("bloqueAmarillo", "/assets/images/arkanoid/brickYellow.png");
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
