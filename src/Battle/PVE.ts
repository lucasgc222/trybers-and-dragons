import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(protected player: Fighter, protected enemies: SimpleFighter[] = [new Monster()]) {
    super(player);
    super.fight();
  }

  fight(): number {
    for (let i = 0; i < this.enemies.length; i += 1) {
      while (this.player.lifePoints > 0 && this.enemies[i].lifePoints > 0) {
        this.player.attack(this.enemies[i]);
        this.enemies[i].attack(this.player);
      }
    }
    
    return this.player.lifePoints <= 0 ? -1 : 1;
  }
}

export default PVE;