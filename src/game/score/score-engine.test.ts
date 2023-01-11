import { ScoreEngine } from './score-engine';

describe('Given a ScoreEngine class', () => {
  let scoreEngine: ScoreEngine;

  beforeEach(() => {
    scoreEngine = new ScoreEngine();
  });

  test('when we need to add points to our score, the "updateScore" method should do it', () => {
    scoreEngine.updateScore(10);
    expect(scoreEngine.getScore()).toBe(10);
  });

  test('when we need subtract points to our score, the "updateScore" method should do it', () => {
    scoreEngine.updateScore(10);
    scoreEngine.updateScore(-5);
    expect(scoreEngine.getScore()).toBe(5);
  });

  test('the "resetScore" method should reset the score to 0', () => {
    scoreEngine.updateScore(10);
    scoreEngine.resetScore();
    expect(scoreEngine.getScore()).toBe(0);
  });
});
