import { useState, useMemo } from 'react';
import { Robot } from '../types/robot';
import { robotService } from '../services/robotService';

export type FilterType = 'all' | 'online' | 'offline' | 'low-battery';

export function useRobotFilter(robots: Robot[]) {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredRobots = useMemo(() => {
    return robots.filter(robot => {
      switch (filter) {
        case 'online':
          return robot.isOnline;
        case 'offline':
          return !robot.isOnline;
        case 'low-battery':
          return robot.batteryPercentage < robotService.LOW_BATTERY_THRESHOLD;
        default:
          return true;
      }
    });
  }, [robots, filter]);

  return { filter, setFilter, filteredRobots };
}