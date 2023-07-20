import { Action } from '../types/GameClasses';

const rock = new Action('rock');
const paper = new Action('paper');
const scissors = new Action('scissors');
const lizard = new Action('lizard');
const spock = new Action('spock');

rock.setDefeats([lizard, scissors]);
rock.setDefeatedBy([paper, spock]);

paper.setDefeats([rock, spock]);
paper.setDefeatedBy([scissors, lizard]);

scissors.setDefeats([paper, lizard]);
scissors.setDefeatedBy([spock, rock]);

lizard.setDefeats([spock, paper]);
lizard.setDefeatedBy([scissors, rock]);

spock.setDefeats([scissors, rock]);
spock.setDefeatedBy([lizard, paper]);

export const actions = [rock, paper, scissors, lizard, spock];
