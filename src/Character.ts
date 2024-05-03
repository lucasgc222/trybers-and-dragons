import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(
    readonly name: string,
  ) {
    this._race = new Elf('High Elf', getRandomInt(1, 10));
    this._archetype = new Mage('Dark Mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._dexterity = this._race.dexterity;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energy: Energy = { type_: this._energy.type_, amount: this._energy.amount };
    return energy;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    const normalSpecialAttack = this._strength * 2;
    const ultimateSpecialAttack = 9999;

    enemy.receiveDamage(enemy.lifePoints >= this._lifePoints ? normalSpecialAttack
      : ultimateSpecialAttack);
  }

  levelUp(): void {
    const nextLife = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = nextLife > this._race.maxLifePoints ? this._race.maxLifePoints
      : nextLife;
    this._lifePoints = this._maxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const defaultActionDamage = 1;
    const damage = attackPoints - this.defense;
    this._lifePoints -= damage > 0 ? damage : defaultActionDamage;
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }
}

export default Character;