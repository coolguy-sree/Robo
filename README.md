# Robot Fleet Monitoring Dashboard

This project is a **Robot Fleet Monitoring Dashboard** that visualizes the status and telemetry data of multiple robots. It provides real-time updates and a responsive interface to efficiently monitor the performance and location of robots.

## Features

### Core Functionalities
1. **Robot List**
   - Robot ID (UUID)
   - Online/Offline status
   - Battery percentage
   - CPU usage
   - RAM consumption
   - Last updated timestamp
   - Location coordinates (latitude, longitude)

2. **Real-Time Updates**
   - Uses WebSockets or periodic polling for updates (every 5 seconds).

3. **Map Visualization**
   - Displays the robots' current positions using libraries like **Leaflet.js** or **Mapbox**.

4. **Alerts**
   - Highlights robots with:
     - Offline status
     - Low battery levels (<20%)

### Bonus Features
- Hosted frontend on **Netlify** and backend on **Heroku/Render**.
- Dockerized application for easy deployment.
- Filtering options for robot status (active, offline, low battery).

## Technologies Used

### Frontend
- **React.js**: For building a clean, responsive user interface.
- **Leaflet.js**/ **Mapbox**: For real-time map visualization.

### Backend
- **FastAPI**: To simulate and serve robot telemetry data.
- **WebSockets**: For real-time communication.
- **Mock Data**: Generated using `fake_robot_data.json`.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

For any questions or support, feel free to contact [Your Name] at [Your Email].
