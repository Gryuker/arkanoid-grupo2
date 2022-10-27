import Phaser from "phaser";
import { RestartButton } from "./restartButton";

export class GameOver extends Phaser.Scene {
    
    constructor() {
        super({ key: 'gameover' });
        this.restartButton = new RestartButton(this);
    }

    preload() {
        this.load.image('gameover', '/assets/images/recursos/game-over-1.png');
        this.restartButton.preload();
    }
    
    create() {
        this.add.image(410, 250, 'background');
        this.restartButton.create();
        this.gameoverImage = this.add.image(400, 90, 'gameover');
    }
}

/* export default GameOver; */