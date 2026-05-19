/**
 * SECTION 3: Chamber Storage & Task Queues (Generics)
 * 
 * Generics allow us to write highly reusable, type-safe utilities. In this section,
 * you will build a generic storage container for resources and a task runner
 * that is strictly constrained to specific structural properties.
 */

// 1. Generic ChamberStorage Class
// - Implement a class 'ChamberStorage<T>' that holds items of generic type 'T' (e.g. food, honey pots, eggs).
// - It should have:
//   - A private property 'items' of type T[] (initialized to an empty array)
//   - A method 'addItem(item: T): void' to append an item to storage
//   - A method 'getItem(index: number): T | undefined' to retrieve an item
//   - A method 'listItems(): T[]' to return a copy of the items list
//   - A method 'size(): number' to return the count of items in storage
export class ChamberStorage<T> {
  // TODO: Implement ChamberStorage

  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  listItems(): T[] {
    return [...this.items];
  }

  size(): number {
    return this.items.length;
  }

}


// 2. Task Interface
// - Define an interface 'Task' representing a chore to be done in the hive.
// - Properties:
//   - id: number
//   - description: string
//   - urgency: 'LOW' | 'HIGH'
export interface Task {
  // TODO: Implement Task properties

  id: number;
  description: string;
  urgency: 'LOW' | 'HIGH';
  
}


// 3. Constrained Generic HiveTaskRunner Class
// - Implement a class 'HiveTaskRunner<T extends Task>' that executes tasks of type 'T'.
// - The type parameter 'T' MUST be constrained to extend 'Task'.
// - It should have:
//   - A private property 'tasks' of type T[] (initialized to an empty array)
//   - A method 'queueTask(task: T): void' to add a task to the end of the queue
//   - A method 'runNextTask(): T | undefined' to remove and return the FIRST task in the queue (FIFO order)
//   - A method 'getHighPriorityTasks(): T[]' to filter and return all tasks with urgency 'HIGH'
//   - A method 'size(): number' to return the count of tasks remaining
export class HiveTaskRunner<T extends Task> {
  // TODO: Implement HiveTaskRunner
}
