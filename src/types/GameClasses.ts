export class Action {
  private defeats: string[] = [];
  private defeatedBy: string[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  setDefeats(actions: Action[]) {
    this.defeats = actions.map(e => e.getName());
  }

  setDefeatedBy(actions: Action[]) {
    this.defeatedBy = actions.map(e => e.getName());
  }

  defeatsAction(action: Action) {
    return this.defeats.includes(action.name);
  }

  isDefeatedByAction(action: Action) {
    return this.defeatedBy.includes(action.name);
  }
}

export class Player {
  constructor(
    private name: string,
    private selectedAction: Action,
    private score: number = 0,
  ) {}

  getName() {
    return this.name;
  }

  getSelectedAction() {
    return this.selectedAction;
  }

  getScore() {
    return this.score;
  }

  chooseAction(action: Action) {
    this.selectedAction = action;
  }

  increaseScore() {
    this.score++;
  }
}

export class Game {
  constructor(
    private player1: Player,
    private player2: Player,
    private actions: Action[],
  ) {}

  playRound() {
    this.player1.chooseAction(this.getRandomAction());
    this.player2.chooseAction(this.getRandomAction());

    this.determineWinner();
  }

  determineWinner() {
    const action1 = this.player1.getSelectedAction();
    const action2 = this.player2.getSelectedAction();

    if (action1 === action2) {
      console.log("It's a tie!");
      return;
    }

    if (action1.defeatsAction(action2)) {
      console.log(`${this.player1.getName()} wins!`);
      this.player1.increaseScore();
    } else {
      console.log(`${this.player2.getName()} wins!`);
      this.player2.increaseScore();
    }
  }

  getRandomAction() {
    const randomIndex = Math.floor(Math.random() * this.actions.length);
    return this.actions[randomIndex];
  }
}

// Usage example
// const rock = new Action('rock', ['scissors'], ['paper']);
// const paper = new Action('paper', ['rock'], ['scissors']);
// const scissors = new Action('scissors', ['paper'], ['rock']);

// const player1 = new Player('Player 1', rock);
// const player2 = new Player('Player 2', paper);
// const game = new Game(player1, player2, [rock, paper, scissors]);

// game.playRound();
