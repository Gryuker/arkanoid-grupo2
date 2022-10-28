import Phaser from "phaser";

export class LevelButtons {
  constructor(scene) {
    this.relatedScene = scene;
  }

  preload() {
    this.relatedScene.load.spritesheet('button1', '/assets/images/arkanoid/level1Btn.png', { frameWidth: 195, frameHeight: 49 });
    this.relatedScene.load.spritesheet('button2', '/assets/images/arkanoid/level2Btn.png', { frameWidth: 195, frameHeight: 49 });
  }

  create() {
    this.level1Button = this.relatedScene.add.sprite(400, 230, 'button1').setInteractive();
    this.level2Button = this.relatedScene.add.sprite(400, 330, 'button2').setInteractive();

    this.level1Button.on('pointerdown', () => {
        this.relatedScene.scene.start('Play', 1);
    });
    this.level2Button.on('pointerdown', () => {
        this.relatedScene.scene.start('Play', 2);
    });
  }
}
