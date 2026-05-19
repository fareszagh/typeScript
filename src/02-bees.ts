import { BeeProfile, Position3D } from './01-basics';

/**
 * SECTION 2: The Hive Hierarchy (OOP, Subclasses & Access Modifiers)
 * 
 * In this section, you will model the classes of the colony using TypeScript's
 * strict properties, access modifiers (public, private, protected, readonly),
 * and superclass construction.
 */

// 1. BaseLarva Class (Superclass)
// - Properties:
//   - age: number (readonly property, initialized in constructor)
//   - healthScore: number (protected property, initialized in constructor, max 100)
//   - foodSource: string (private property, initialized in constructor)
// - Constructor:
//   - Accepts (age: number, healthScore: number, foodSource: string)
// - Methods:
//   - eat(amount: number): void
//     - Increments healthScore by amount * 2. If it exceeds 100, set healthScore to 100.
//   - getHealth(): number
//     - Returns healthScore.
export class BaseLarva {
  // TODO: Implement fields, constructor and methods

  readonly age: number;
  protected healthScore: number;
  private foodSource: string;

  constructor(age: number, healthScore: number, foodSource: string) {
    this.age = age;
    this.healthScore = healthScore > 100 ? 100 : healthScore;
    this.foodSource = foodSource;
  }

  eat(amount: number): void {
    this.healthScore += amount * 2;

    if (this.healthScore > 100) {
      this.healthScore = 100;
    }

}
getHealth ():number{
  return this.healthScore;
}
}


// 2. AdultBee Class (extends BaseLarva)
// - Properties:
//   - registryProfile: BeeProfile (protected property)
// - Constructor:
//   - Accepts (age: number, healthScore: number, foodSource: string, profile: BeeProfile)
//   - Calls super(age, healthScore, foodSource)
// - Methods:
//   - performRole(): string
//     - Returns: "Bee <name> is executing role: <role>" (using profile name and role)
//   - getProfile(): BeeProfile
//     - Returns registryProfile.
export class AdultBee extends BaseLarva {
  // TODO: Implement AdultBee

  protected registryProfile: BeeProfile;

  constructor(
    age: number,
    healthScore: number,
    foodSource: string,
    profile: BeeProfile
  ) {
    super(age, healthScore, foodSource);

    this.registryProfile = profile;
  }

  performRole(): string {
    return `Bee ${this.registryProfile.name} is executing role: ${this.registryProfile.role}`;
  }

  getProfile(): BeeProfile {
    return this.registryProfile;
  }
}


// 3. HoneyProducerBee Class (extends AdultBee)
// - Properties:
//   - honeyPotsCollected: number (private property, initialized to 0)
// - Constructor:
//   - Accepts (age: number, healthScore: number, foodSource: string, profile: BeeProfile)
//   - Calls super(...)
// - Methods:
//   - produceHoney(): void
//     - Increments honeyPotsCollected by 1.
//     - Also boosts healthScore by 2 (if it does not exceed 100).
//   - unloadHoney(): number
//     - Returns the current count of honeyPotsCollected, and RESETS honeyPotsCollected to 0.
export class HoneyProducerBee extends AdultBee {
  // TODO: Implement HoneyProducerBee

  private honeyPotsCollected: number = 0;

  constructor(
    age: number,
    healthScore: number,
    foodSource: string,
    profile: BeeProfile
  ) {
    super(age, healthScore, foodSource, profile);
  }

  produceHoney(): void {
    this.honeyPotsCollected += 1;

    this.healthScore += 2;

    if (this.healthScore > 100) {
      this.healthScore = 100;
    }
  }

  unloadHoney(): number {
    const collected = this.honeyPotsCollected;

    this.honeyPotsCollected = 0;

    return collected;
  }
}


// 4. PollenForager Class (extends AdultBee)
// - Properties:
//   - canFly: boolean (private property, initialized in constructor)
//   - treasureChest: string[] (private property, initialized to an empty array)
// - Constructor:
//   - Accepts (age: number, healthScore: number, foodSource: string, profile: BeeProfile, canFly: boolean)
//   - Calls super(...)
// - Methods:
//   - forage(location: Position3D): void
//     - If canFly is true, add a string to treasureChest: "pollen-[lat]-[long]-[alt]" (e.g. "pollen-36.8065-10.1815-250")
//     - If canFly is false, do not add anything.
//   - getTreasure(): string[]
//     - Returns treasureChest.
export class PollenForager extends AdultBee {
  // TODO: Implement PollenForager

  private canFly: boolean;
  private treasureChest: string[] = [];

  constructor(
    age: number,
    healthScore: number,
    foodSource: string,
    profile: BeeProfile,
    canFly: boolean
  ) {
    super(age, healthScore, foodSource, profile);

    this.canFly = canFly;
  }

  forage(location: Position3D): void {
    if (this.canFly) {
      const [lat, long, alt] = location;

      this.treasureChest.push(`pollen-${lat}-${long}-${alt}`);
    }
  }

  getTreasure(): string[] {
    return this.treasureChest;
  }

}


// 5. RoyalQueenBee Class (extends AdultBee)
// - Properties:
//   - workerRegistry: AdultBee[] (private property, initialized to an empty array)
// - Constructor:
//   - Accepts (age: number, healthScore: number, foodSource: string, profile: BeeProfile)
//   - Calls super(...)
// - Methods:
//   - layEggs(count: number): string
//     - Returns: "Queen <name> laid <count> larvae"
//   - registerWorker(worker: AdultBee): void
//     - Adds worker to the workerRegistry array.
//   - getWorkers(): AdultBee[]
//     - Returns workerRegistry.
export class RoyalQueenBee extends AdultBee {
  // TODO: Implement RoyalQueenBee

  private workerRegistry: AdultBee[] = [];

  constructor(
    age: number,
    healthScore: number,
    foodSource: string,
    profile: BeeProfile
  ) {
    super(age, healthScore, foodSource, profile);
  }

  layEggs(count: number): string {
    return `Queen ${this.registryProfile.name} laid ${count} larvae`;
  }

  registerWorker(worker: AdultBee): void {
    this.workerRegistry.push(worker);
  }

  getWorkers(): AdultBee[] {
    return this.workerRegistry;
  }

}
