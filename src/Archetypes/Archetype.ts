import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly special: number;
  readonly cost: number;

  constructor(readonly name: string) { 
    this.special = 0;
    this.cost = 0;
  }
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get energyType(): EnergyType;
}
  
export default Archetype;