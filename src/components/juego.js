import "./juego.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Phaser from 'phaser';
import Preload from './phaser/preload';
import Play from './phaser/play';

function Juego() {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const CONFIGURACION = {
        scale: {
            autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
            width: 800,
            height: 500
        },
        posicionInicial: { x: 400, y: 550 },
        velocidadInical: 0,
    };

    const Escenas = [Preload, Play];
    const crearEscena = Scene => new Scene(CONFIGURACION);
    const iniciarEscena = () => Escenas.map(crearEscena);


    var config = {
      type: Phaser.AUTO,
      ...CONFIGURACION,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scene: iniciarEscena(),
      //scene: [Nivel1, GameOver, Wining]
    };

    var game = new Phaser.Game(config);

    game.events.on("LISTO", setListo);

    return () => {
      setListo(false);
      game.destroy(true);
    };
  }, [listo]);
}

export default Juego;
