import { useState, useEffect } from 'react';
import { Robot } from '../types/robot';
import { robotService } from '../services/robotService';

const UPDATE_INTERVAL = 5000;

export function useRobotData() {
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedRobots = robotService.updateRobotData();
      setRobots(updatedRobots);
    }, UPDATE_INTERVAL);

    // Initial load
    setRobots(robotService.getRobots());

    return () => clearInterval(interval);
  }, []);

  return robots;
}