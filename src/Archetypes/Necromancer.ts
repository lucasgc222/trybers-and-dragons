import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  get energyType(): EnergyType {
    return this.energy;
  }

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer._instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}

export default Necromancer;