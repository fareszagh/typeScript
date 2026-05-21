import { BeeProfile } from './01-basics';

/**
 * SECTION 6: Analytics Dashboard (Mapped & Conditional Types)
 * 
 * In this advanced section, you will write powerful type-level operations
 * (Mapped Types and Conditional Types) to build a type-safe dashboard.
 */

// 1. Mapped Type: StrictRegistryConfig
// - Implement a mapped type 'StrictRegistryConfig<T>'.
// - It must take a generic type 'T' and transform it such that:
//   1. All properties of 'T' become 'readonly'.
//   2. All properties of 'T' become REQUIRED (i.e. strip out optional modifiers '?' using '-?').
export type StrictRegistryConfig<T> = {
  readonly [K in keyof T]-?: T[K];
}; // TODO: Implement Mapped Type


// 2. Conditional Type: FilterLaborBees
// - Define a contract interface 'LaborBeeType' representing a bee's ability to work:
//   - role: string
//   - canPerformLabor: boolean
export interface LaborBeeType {
  role: string;
  canPerformLabor: boolean;
}

// - Implement a Conditional Type 'FilterLaborBees<T>' that takes a union of types 'T'.
// - If 'T' extends an object containing '{ canPerformLabor: true }', resolve to 'T'.
// - Otherwise, resolve to 'never'.
export type FilterLaborBees<T> =
  T extends { canPerformLabor: true } ? T : never; // TODO: Implement Conditional Type


// 3. Utility Types: Dashboard Operations
export interface RawAnalyticsData {
  totalHoneyHarvested: number;
  avgPollenSacks: number;
  threatCount: number;
  confidentialSystemLog: string;
}

// - Complete the type definitions below using TypeScript's built-in Utility Types:
//   - 'RequiredRegistrySummary': Use the 'Required' utility type to make all fields of 'BeeProfile' mandatory.
//   - 'PublicAnalyticsReport': Use the 'Omit' utility type to extract all fields from 'RawAnalyticsData' EXCEPT 'confidentialSystemLog'.
//   - 'ForagingMetricsRecord': Use the 'Record' utility type to map string location names (keys) to number yields (values).
// RequiredRegistrySummary
export type RequiredRegistrySummary = Required<BeeProfile>; // TODO: Replace 'any'
// PublicAnalyticsReport
export type PublicAnalyticsReport = Omit<
  RawAnalyticsData,
  'confidentialSystemLog'
>; // TODO: Replace 'any'
// ForagingMetricsRecord
export type ForagingMetricsRecord = Record<string, number>;  // TODO: Replace 'any'
