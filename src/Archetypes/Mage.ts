import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  get energyType(): EnergyType {
    return this.energy;
  }

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage._instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}

export default Mage;