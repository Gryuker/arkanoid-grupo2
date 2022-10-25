import Phaser from "phaser";

class Play extends Phaser.Scene {
  constructor(config) {
    super({ key: "Play" });

    this.config = config;
    this.player = null;
    this.sonido = null;
  }

  create() {
    //condiciones iniciales
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.cursors = this.input.keyboard.createCursorKeys();

    //creando el fondo
    this.crearFondo();

    //agregando plataforma como player
    this.crearNave();

    //agregando pelota
    this.crearBola();

    //agregando los obstaculos
    /* this.crearLadrillos(); */

    //agregando sonido
    this.crearSonido();

    //mover la plataforma
    /* this.input.keyboard.on("keydown-SPACE", this.flap, this); */

    //impacto bola-nave
    //this.physics.add.collider(this.bola, this.nave, this.impactoNave, null, this);
    //this.impactoNaveSample = this.sound.add('impactoNaveSample');
  }

  crearFondo() {
    this.add.image(410, 250, "fondo");
  }

  crearNave() {
    this.nave = this.physics.add.image(400, 460, "nave").setImmovable();
    this.nave.body.allowGravity = false;
    this.nave.setCollideWorldBounds(true);
  }

  crearBola() {
    this.bola = this.physics.add.image(385, 430, "bola");
    this.bola.setBounce(1);
    this.bola.setCollideWorldBounds(true);
    this.bola.setData("glue", true);
  }

  crearSonido() {
    this.sonido = this.sound.add("musica");
    const soundConfig = {
      volume: 1,
      loop: true,
    };
    // this.sonido.play(soundConfig);

    if (!this.sound.locked) {
      // already unlocked so play
      this.sonido.play(soundConfig);
    } else {
      // wait for 'unlocked' to fire and then play
      this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
        this.sonido.play(soundConfig);
      });
    }
  }

  update() {
    if (this.cursors.left.isDown) {
      this.nave.setVelocityX(-500);
      if (this.bola.getData("glue")) {
        this.bola.setVelocityX(-500);
      }
    } else if (this.cursors.right.isDown) {
      this.nave.setVelocityX(500);
      if (this.bola.getData("glue")) {
        this.bola.setVelocityX(500);
      }
    } else {
      this.nave.setVelocityX(0);
      if (this.bola.getData("glue")) {
        this.bola.setVelocityX(0);
      }
    }
    if (this.cursors.up.isDown) {
        if (this.bola.getData('glue')) {
          //this.startGameSample.play();
          this.bola.setVelocity(-60, -300);
          this.bola.setData('glue', false);
        }
      }
  }
}

export default Play;
