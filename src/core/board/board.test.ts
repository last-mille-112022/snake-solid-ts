import { boardLimitsMock } from './../constants/board-constants';
import { Board } from './board';

describe('Given a game board', () => {
  describe('When initialized with certain (small) dimentions', () => {
    const board = new Board({ x: 10, y: 2 });
    it('Then the board limits should be created', () => {
      expect(board.boardLimits).toEqual(boardLimitsMock);
    });
  });
});

// La Snake se puede mover en varias direcciones desplazándose un cuadrado de distancia y a una cierta velocidad.
// Además cuando la Snake llegue a un límite del tablero, aparecerá por el lado opuesto en la misma posición.

// El movimiento consiste en mover la cabeza un cuadrado en la dirección que lleve la Snake y luego desplazar un
// pixel haciendo que el elemento n+1 ocupe la posición del elemento n

// De momento queremos que la Snake se mueva de manera infinita en una dirección inicial y a una velocidad fija
// y que al llegar al final aparezca por el lado opuesto

// ¿Cómo diseñarías el movimiento?
// ¿Cómo implementarías los límites de la pantalla para que en futuro se pudiesen cerrar?
// ¿Cómo diseñarías la velocidad del juego? ¿Y para que en un futuro pueda ir cambiando en función de la dificultad o el tiempo de partida?
// ¿Se puede hacer el movimiento de la Snake sin hacer un bucle?
