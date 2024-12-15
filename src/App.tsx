import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { RobotList } from './components/RobotList';
import { Map } from './components/Map';
import { useRobotData } from './hooks/useRobotData';
import { useRobotFilter, FilterType } from './hooks/useRobotFilter';
import { Robot } from './types/robot';

function App() {
  const robots = useRobotData();
  const { filter, setFilter, filteredRobots } = useRobotFilter(robots);
  const [selectedRobotId, setSelectedRobotId] = useState<string>();

  const handleRobotSelect = (robot: Robot) => {
    setSelectedRobotId(robot.id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Robot Fleet Dashboard</h1>
          <p className="text-gray-600">Monitoring {robots.length} robots in real-time</p>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            className="bg-white border border-gray-300 rounded-md px-3 py-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
          >
            <option value="all">All Robots</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="low-battery">Low Battery</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg h-[calc(100vh-200px)] overflow-hidden">
            <RobotList
              robots={filteredRobots}
              onRobotSelect={handleRobotSelect}
              selectedRobotId={selectedRobotId}
            />
          </div>
          <div className="lg:col-span-2 bg-gray-50 p-4 rounded-lg h-[calc(100vh-200px)]">
            <Map robots={filteredRobots} selectedRobotId={selectedRobotId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;