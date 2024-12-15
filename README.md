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

### Hosting & Deployment
- **Netlify**: Hosting the frontend.
- **Heroku/Render**: Hosting the backend.
- **Docker**: Containerization for deployment.

## Setup Instructions

### Prerequisites
- **Node.js** (v14 or above)
- **Python** (v3.8 or above)
- **Docker** (optional for containerized setup)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Deployment
- Build the frontend for production:
  ```bash
  npm run build
  ```
- Use Docker to containerize the app:
  ```bash
  docker-compose up --build
  ```

## Usage
1. Access the frontend at `http://localhost:3000`.
2. View the real-time robot telemetry and map visualization.
3. Apply filters to sort robots by status.

## Screenshots
Include screenshots or GIFs of your dashboard.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

For any questions or support, feel free to contact [Your Name] at [Your Email].
