import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instances = 0;
  private energy: EnergyType;

  get energyType(): EnergyType {
    return this.energy;
  }

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger._instances += 1;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}

export default Ranger;