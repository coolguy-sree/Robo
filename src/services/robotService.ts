import { Robot } from '../types/robot';
import { nanoid } from 'nanoid';
import { random } from '../utils/random';
import { locationUtils } from '../utils/location';

const ROBOT_COUNT = 10;
const LOW_BATTERY_THRESHOLD = 20;

function generateRobot(): Robot {
  return {
    id: nanoid(),
    isOnline: random.boolean(0.8), // 80% chance of being online
    batteryPercentage: random.number(0, 100),
    cpuUsage: random.number(0, 100),
    ramUsage: random.number(0, 100),
    lastUpdated: new Date().toISOString(),
    location: locationUtils.generateRandomLocation(),
  };
}

let robots: Robot[] = Array.from({ length: ROBOT_COUNT }, generateRobot);

function updateRobotStats(robot: Robot): Robot {
  return {
    ...robot,
    isOnline: random.boolean(0.9), // 90% chance of staying online
    batteryPercentage: Math.max(0, Math.min(100, random.variation(robot.batteryPercentage, 10))),
    cpuUsage: random.number(0, 100),
    ramUsage: random.number(0, 100),
    lastUpdated: new Date().toISOString(),
    location: locationUtils.updateLocation(robot.location),
  };
}

export const robotService = {
  getRobots: () => robots,
  updateRobotData: () => {
    robots = robots.map(updateRobotStats);
    return robots;
  },
  LOW_BATTERY_THRESHOLD,
};