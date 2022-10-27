import Phaser from "phaser";
import { LiveCounter } from "./liveCounter";

class Play extends Phaser.Scene {
  constructor(config) {
    super({ key: "Play" });

    this.config = config;
    this.player = null;
    this.sonido = null;
    this.score = 0;
    this.openingText = null;
    this.liveCounter = new LiveCounter(this, 3);
  }

  create() {
    //condiciones iniciales
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.cursors = this.input.keyboard.createCursorKeys();

    //creando el fondo
    this.crearFondo();

    //agregando plataforma como player
    this.crearNave();

    //agregando contador de vidas
    this.liveCounter.create();

    //agregando pelota
    this.crearBola();

    //agregando los obstaculos
    this.crearBloques();

    //agregando texto
    this.crearTextoInicio();

    //agregando sonido
    this.crearSonido();

    //impacto bola-nave
    this.physics.add.collider(
      this.bola,
      this.nave,
      this.impactoNave,
      null,
      this
    );

    //impacto bloque-bola
    this.physics.add.collider(
      this.bola,
      this.bloque,
      this.impactoBloque,
      null,
      this
    );

    //Texto score
    this.scoreText = this.add.text(16, 16, "PUNTOS: 0", {
      fontSize: "20px",
      fill: "#fff",
      fontFamily: "verdana, arial, sans-serif",
    });
    //this.impactoNaveSample = this.sound.add('impactoNaveSample');
  }

  crearFondo() {
    this.add.image(410, 250, "fondo");
  }

  crearNave() {
    this.nave = this.physics.add.sprite(400, 460, "nave").setImmovable();
    this.nave.body.allowGravity = false;
    this.nave.setCollideWorldBounds(true);
    //animación laser de nave
    this.anims.create({
      key: "naveLaser",
      frames: this.anims.generateFrameNumbers("nave", {
        frames: [0, 1, 2],
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.nave.play("naveLaser");
  }

  crearBola() {
    this.bola = this.physics.add.image(385, 430, "bola");
    this.bola.setBounce(0);
    this.bola.setCollideWorldBounds(true);
    this.bola.setData("glue", true);
  }

  crearBloques() {
    this.bloque = this.physics.add.staticGroup({
      key: [
        "bloqueNegro"/*,
        "bloqueAzul",
        "bloqueVerde",
        "bloqueGris",
        "bloqueNaranja",
        "bloqueBlanco",
        "bloqueAmarillo",*/
      ],
      frameQuantity: 1,
      gridAlign: {
        width: 11,
        height: 3,
        cellWidth: 70,
        cellHeight: 40,
        x: 45,
        y: 70,
      },
    });
  }

  crearTextoInicio() {
    this.openingText = this.add.text(
      this.physics.world.bounds.width / 2,
      this.physics.world.bounds.height / 2,
      'Presione "ARRIBA" para comenzar',
      {
        fontFamily: "Monaco, Courier, monospace",
        fontSize: "20px",
        fill: "#fff",
      }
    );

    this.openingText.setOrigin(0.5);
  }

  crearSonido() {
    this.sonido = this.sound.add("musica");
    const soundConfig = {
      volume: 0.2,
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
    //mover la plataforma
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

    //Perdimos?
    if (this.bola.y > 500 && this.bola.active) {
      let gameNotFinished = this.liveCounter.perderVida();
      if (!gameNotFinished) {
        //this.liveLostSample.play();
        this.setInitialPlatformState();
      }
    }

    //disparo inicial
    if (this.cursors.up.isDown) {
      if (this.bola.getData("glue")) {
        //this.startGameSample.play();
        this.bola.setVelocity(-60, -300);
        this.bola.setData("glue", false);
        this.openingText.setVisible(false);
        this.bola.setBounce(1);
      }
    }
  }

  //metodos invocados

  impactoNave(bola, nave) {
    //this.naveImpactSample.play();
    let relativeImpact = bola.x - nave.x;
    if (relativeImpact > 0) {
      bola.setVelocityX(8 * relativeImpact);
    } else if (relativeImpact < 0) {
      bola.setVelocityX(8 * relativeImpact);
    } else {
      bola.setVelocityX(Phaser.Math.Between(-10, 10));
    }
  }

  incrementarPuntos(puntos) {
    this.score += puntos;
    this.scoreText.setText("PUNTOS: " + this.score);
  }

  impactoBloque(bola, bloque) {
    bloque.disableBody(true, true);
    this.incrementarPuntos(1);
    if(this.bloque.countActive()===0){
      this.endGame(true);
    }
  }

  setInitialPlatformState() {
    this.nave.x = 400;
    this.nave.y = 460;
    this.bola.setVelocity(0, 0);
    this.bola.x = 385;
    this.bola.y = 430;
    this.bola.setData("glue", true);
    this.openingText.setVisible(true);
  }

  endGame(completed) {
    if(! completed) {
      //this.gameOverSample.play();
      this.scene.start('gameover');
      this.score=0;
    } else {
      //this.winSample.play();
      this.scene.start('congratulations');
    }
  }
}

export default Play;
