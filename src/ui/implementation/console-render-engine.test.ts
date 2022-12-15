import blessed from 'blessed';
import type { Key } from '../render-engine';
import { ConsoleRenderEngine } from './console-render-engine';

const screenRender = jest.fn();
const keyListener = jest.fn();
const onListener = jest.fn();

jest.mock('blessed', () => ({
  screen: jest.fn(() => ({
    render: screenRender,
    on: onListener,
    key: keyListener,
  })),
  box: jest.fn(() => ({
    setLine: jest.fn(),
    detach: jest.fn(),
  })),
}));
const mockedBlessed = jest.mocked(blessed);

describe('Console Render Engine', () => {
  let engine: ConsoleRenderEngine;

  beforeEach(() => {
    engine = new ConsoleRenderEngine();
  });

  it('should be created', () => {
    expect(engine).toBeDefined();
    expect(mockedBlessed.screen).toHaveBeenCalled();
  });

  it('reset score should update it to 0', () => {
    const updateSpied = jest.spyOn(engine, 'updateScore');
    engine.resetScore();
    expect(mockedBlessed.box).toHaveBeenCalled();
    expect(updateSpied).toHaveBeenCalledWith(0);
  });

  it('Clear game screen should clean all elements', () => {
    engine.clearGameScreen();
    expect(mockedBlessed.box).toHaveBeenCalled();
  });

  it('Render should updates the ui', () => {
    engine.render();
    expect(screenRender).toHaveBeenCalled();
  });

  it('ShowGameOver should change the game engine', () => {
    engine.showGameOver();
    expect(mockedBlessed.box).toHaveBeenCalled();
  });

  it('draw element should create a box into the ui', () => {
    const getColor = () => 'red';
    const getCoordinates = () => ({
      x: 10,
      y: 20,
    });
    engine.drawElement({ getColor, getCoordinates });
    expect(mockedBlessed.box).toHaveBeenCalled();
  });

  it('Exit handler should call the listener when invoked', () => {
    expect.assertions(1);
    keyListener.mockImplementationOnce((_keys: string[], handler: jest.EmptyFunction) => {
      handler();
    });
    const listener = () => {
      expect(true).toBe(true);
    };

    engine.addExitListener(listener);
  });

  it('Key handler should call the listener when invoked', () => {
    expect.assertions(2);
    const key = 'a';
    keyListener.mockImplementationOnce((keys: string, handler: jest.EmptyFunction) => {
      expect(keys).toBe(key);
      handler();
    });
    const listener = () => {
      expect(true).toBe(true);
    };

    engine.addKeyListener(key, listener);
  });

  it('Move handler with no name must be called with the full key information', () => {
    expect.assertions(1);
    onListener.mockImplementationOnce((_event: string, handler: jest.MockableFunction) => {
      handler({}, {
        ctrl: true,
        shit: false,
        full: 'a',
      });
    });
    const listener = (key: Key) => {
      expect(key.name).toBe('a');
    };

    engine.addMoveListener(listener);
  });

  it('Move handler with name must be called with the key information', () => {
    expect.assertions(1);
    onListener.mockImplementationOnce((_event: string, handler: jest.MockableFunction) => {
      handler({}, {
        ctrl: true,
        shit: false,
        name: 'a',
      });
    });
    const listener = (key: Key) => {
      expect(key.name).toBe('a');
    };

    engine.addMoveListener(listener);
  });
});
