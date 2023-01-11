import type { RenderScorable } from '../../ui/render-engine';

export class ScoreEngine implements RenderScorable {
  #score: number;

  constructor() {
    this.#score = 0;
  }

  updateScore(points: number): void {
    this.#score += points;
  }

  resetScore(): void {
    this.#score = 0;
  }

  getScore(): number {
    return this.#score;
  }
}
