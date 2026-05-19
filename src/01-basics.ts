/**
 * SECTION 1: The Hive Registry (Basics & Core Types)
 * 
 * In this section, you will register the basic state of the honeybee colony
 * and create interfaces and type aliases for bee profiles and GPS coordinates.
 */

// 1. Basic Variable Annotations
// - Annotate 'hiveName' as a string (initialized to "Sovereign Swarm")
// - Annotate 'population' as a number (initialized to 45000)
// - Annotate 'isQueenPresent' as a boolean (initialized to true)
export let hiveName: string = "Sovereign Swarm";
export let population: number = 45000;
export let isQueenPresent: boolean = true;

// 2. Arrays & Tuples
// - Annotate 'larvaeWeights' as an array of numbers.
export let larvaeWeights: number[] = [4.2, 5.8, 10.5, 3.1, 12.0];

// - Define a Type Alias 'Position3D' representing a tuple [number, number, number]
//   which stands for [latitude, longitude, altitude].
export type Position3D = [number, number, number];

// - Annotate 'hiveLocation' as a 'Position3D' tuple (initialized to [36.8065, 10.1815, 250])
export let hiveLocation: Position3D = [36.8065, 10.1815, 250];

// 3. Interfaces
// - Define an interface 'BeeProfile' representing a registered adult bee.
// - It should have the following properties:
//   - id: number
//   - name: string
//   - age: number (in days)
//   - role: string
//   - specialization: string (optional property)
//   - healthScore: number (optional property)
export interface BeeProfile {
  // TODO: Implement the interface properties here

  id: number;
  name: string;
  age: number; // in days
  role: string;
  specialization?: string;
  healthScore?: number;

}


// 4. Typed Functions
// - Implement 'isLarvaReadyForCocoon'. It should accept 'weight' as a number, and return a boolean.
//   A larva is ready if its weight is 10.5 milligrams or greater.
export function isLarvaReadyForCocoon(weight: number): boolean {
  // TODO: Add type annotations and implementation
  
  return weight >= 10.5;

}

// - Implement 'registerBee'. It should accept a 'profile' of type 'BeeProfile' and return a string.
//   It should return: "Registered bee: <name> as <role>" (e.g. "Registered bee: Buzz as Forager")
export function registerBee(profile: BeeProfile): string {
  // TODO: Add type annotations and implementation
  
  return `Registered bee: ${profile.name} as ${profile.role}`;

}

// - Implement 'calculateAverageWeight'. It should accept an array of numbers ('weights') and return a number.
//   It should compute and return the average of the weights. If the array is empty, return 0.
export function calculateAverageWeight(weights: number[]): number {
  // TODO: Add type annotations and implementation
  
  if (weights.length === 0) return 0;

  const sum = weights.reduce((acc, w) => acc + w, 0);
  return sum / weights.length;
}
