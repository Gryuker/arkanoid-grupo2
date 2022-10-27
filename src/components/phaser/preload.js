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
    this.load.spritesheet("bloque1", "/assets/images/recursos/neon3.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque2", "/assets/images/recursos/neon4.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque3", "/assets/images/recursos/neon7.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque4", "/assets/images/recursos/neon5.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque5", "/assets/images/recursos/neon2.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque6", "/assets/images/recursos/neon1.png", {frameWidth:55, frameHeight:34});
    this.load.spritesheet("bloque7", "/assets/images/recursos/neon6.png", {frameWidth:55, frameHeight:34});
    //acá irían el sprite de la nave y los botones
    /* this.load.spritesheet('dude',
            'img/dude.png',
            { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('bird',
            'img/birdSprite.png',
            { frameWidth: 16, frameHeight: 16 }); */
    //acá van todos los audios
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
