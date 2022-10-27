import Phaser from "phaser";

export class RestartButton {
    constructor(scene) {
      this.relatedScene = scene;
    }
  
    preload() {
      this.relatedScene.load.spritesheet('button', '/assets/images/arkanoid/resetbtn.png', { frameWidth: 199, frameHeight: 218 });
    }
    create() {
        this.startButton = this.relatedScene.add.sprite(400, 230, 'button').setInteractive();
    
        this.startButton.on('pointerover', () => {
            this.startButton.setFrame(1);
        });
        this.startButton.on('pointerout', () => {
            this.startButton.setFrame(0);
        });
        this.startButton.on('pointerdown', () => {
            this.relatedScene.scene.start('Play');
        });
    }
  }
