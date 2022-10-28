import Phaser from "phaser";

class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" });
  }

  preload() {
    //acá van las imágenes y spritesheets
    this.load.image("fondo", "/assets/images/arkanoid/background.png");
    this.load.spritesheet('nave', '/assets/images/arkanoid/nave.png', { frameWidth: 97, frameHeight: 26 });
    this.load.image("bola", "/assets/images/arkanoid/ball.png");
    this.load.image("bloqueNegro", "/assets/images/arkanoid/brickBlack.png");
    this.load.image("bloqueAzul", "/assets/images/arkanoid/brickBlue.png");
    this.load.image("bloqueVerde", "/assets/images/arkanoid/brickGreen.png");
    this.load.image("bloqueGris", "/assets/images/arkanoid/brickGrey.png");
    this.load.image("bloqueNaranja", "/assets/images/arkanoid/brickOrange.png");
    this.load.image("bloqueBlanco", "/assets/images/arkanoid/brickWhite.png");
    this.load.image("bloqueAmarillo", "/assets/images/arkanoid/brickYellow.png");
    //acá van todos los audios
    this.load.audio("musica", "/assets/sounds/BGM-Echelon.mp3");
    this.load.audio('impactoNaveSample', '/assets/sounds/click.wav');
    this.load.audio('choqueBarra', '/assets/sounds/choque_barra.mp3');
    this.load.audio('choqueBloques', '/assets/sounds/choque_bloques.mp3');
    this.load.audio('perder', '/assets/sounds/perder.mp3');
  }

  create() {
    this.scene.start("Play");
  }
}

export default Preload;
