import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  get energyType(): EnergyType {
    return this.energy;
  }

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior._instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;