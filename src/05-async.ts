/**
 * SECTION 5: Foraging Dispatcher (Asynchronous Operations & Promises)
 * 
 * In this section, you will write asynchronous TypeScript code using Promises,
 * async/await, custom exception types, and mock services to coordinate a squad.
 */

// 1. WeatherReport Type
// - Define a type 'WeatherReport' with properties:
//   - temperature: number
//   - windSpeed: number
//   - status: 'SAFE' | 'WARNING' | 'DANGEROUS'
export type WeatherReport = {
  temperature: number;
  windSpeed: number;
  status: 'SAFE' | 'WARNING' | 'DANGEROUS';
};
// TODO: Replace 'any'


// 2. WeatherError Subclass
// - Define a class 'WeatherError' that extends the standard JavaScript 'Error' class.
// - Constructor:
//   - Accepts (message: string) and calls super(message)
export class WeatherError extends Error {
  // TODO: Implement custom Error subclass
  constructor(message: string) {
    super(message);
    this.name = 'WeatherError';
  }
}




// 3. WeatherService Interface
// - Define an interface 'WeatherService' representing an environmental API sensor.
// - It should have a method:
//   - getWeather(locationName: string): Promise<WeatherReport>
export interface WeatherService {
  // TODO: Implement getWeather signature
  getWeather(locationName: string): Promise<WeatherReport>;
}




// 4. HiveDispatcher Class
// - Implement a class 'HiveDispatcher' that schedules foraging squads.
// - Properties:
//   - weatherService: WeatherService (private property, initialized in constructor)
// - Constructor:
//   - Accepts (weatherService: WeatherService)
// - Methods:
//   - dispatchSquad(locationName: string, foragerNames: string[]): Promise<string>
//     - This method MUST be marked as 'async' and return a Promise of string.
//     - Steps:
//       1. Call weatherService.getWeather(locationName) asynchronously and wait for the report.
//       2. Evaluate report.status:
//          - If 'DANGEROUS': Throw a new 'WeatherError("Dangerous weather: dispatch aborted")'
//          - If 'WARNING': Return "Warning: Deployed <foragerNames.length> foragers with safety gear"
//          - If 'SAFE': Return "Success: Deployed <foragerNames.length> foragers"

export class HiveDispatcher {
   // TODO: Implement HiveDispatcher
  private weatherService: WeatherService;

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService;
  }

  async dispatchSquad(
    locationName: string,
    foragerNames: string[]
  ): Promise<string> {
    const report = await this.weatherService.getWeather(locationName);

    if (report.status === 'DANGEROUS') {
      throw new WeatherError('Dangerous weather: dispatch aborted');
    }

    if (report.status === 'WARNING') {
      return `Warning: Deployed ${foragerNames.length} foragers with safety gear`;
    }

    return `Success: Deployed ${foragerNames.length} foragers`;
  }
}