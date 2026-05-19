import { AdultBee } from './02-bees';

/**
 * SECTION 4: Hive Security & Events (Advanced Types)
 * 
 * In this section, you will master intersection types, discriminated unions,
 * and custom type guards to build a secure threat response event-loop.
 */

// 1. Intersection Types
// - Define an interface 'Specialist' with:
//   - specializationCode: string
//   - performAnalysis(): string
export interface Specialist {
  // TODO: Implement properties

  specializationCode: string;
  performAnalysis(): string;

}

// - Define an interface 'Guard' with:
//   - defendStation: string
//   - alertSignal(): string
export interface Guard {
  // TODO: Implement properties

  defendStation: string;
  alertSignal(): string;


}

// - Define a type alias 'DefenseLead' that is an INTERSECTION of:
//   - AdultBee
//   - Specialist
//   - Guard
export type DefenseLead = AdultBee & Specialist & Guard; // TODO: Implement intersection


// 2. Discriminated Unions for Hive Events
// - Define 'HoneyHarvestEvent' with:
//   - type: 'harvest' (literal type)
//   - producerId: number
//   - potsAmount: number

export interface HoneyHarvestEvent {
  // TODO: Implement fields

  type: 'harvest';
  producerId: number;
  potsAmount: number;

}

// - Define 'IntruderAlertEvent' with:
//   - type: 'alert' (literal type)
//   - sector: string
//   - dangerLevel: 'LOW' | 'MEDIUM' | 'HIGH'
export interface IntruderAlertEvent {
  // TODO: Implement fields

  type: 'alert';
  sector: string;
  dangerLevel: 'LOW' | 'MEDIUM' | 'HIGH';

}

// - Define 'SwarmRequestEvent' with:
//   - type: 'swarm' (literal type)
//   - scoutId: number
//   - destination: string
export interface SwarmRequestEvent {
  // TODO: Implement fields
  type: 'swarm';
  scoutId: number;
  destination: string;
}

// - Define a Discriminated Union type 'HiveEvent' which is the union of the above three events.
export type HiveEvent = any; // TODO: Replace with the union


// 3. Custom Type Guards
// - Implement a custom Type Guard 'isAlertEvent' to check if a 'HiveEvent' is an 'IntruderAlertEvent'.
//   The return type annotation must use the 'is' keyword (e.g. 'event is IntruderAlertEvent').
export function isAlertEvent(event: HiveEvent): any {
  // TODO: Add type annotations and implementation
}

// - Implement a custom Type Guard 'isHarvestEvent' to check if a 'HiveEvent' is a 'HoneyHarvestEvent'.
//   The return type annotation must use the 'is' keyword.
export function isHarvestEvent(event: HiveEvent): any {
  // TODO: Add type annotations and implementation
}


// 4. Exhaustive Type Narrowing
// - Implement 'processHiveEvent' which accepts a 'HiveEvent' and returns a string.
// - Use your custom Type Guards or type narrowing to handle each event:
//   - 'HoneyHarvestEvent': Return "Harvested <potsAmount> pots of honey from producer <producerId>"
//   - 'IntruderAlertEvent': Return "ALARM! Sector <sector> under <dangerLevel> threat!"
//   - 'SwarmRequestEvent': Return "Swarm sequence requested by scout <scoutId> to <destination>"
export function processHiveEvent(event: HiveEvent): string {
  // TODO: Implement narrowing and return appropriate messages
  return "";
}
