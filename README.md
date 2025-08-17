# FinalProject

## Docker Usage

To build and run this Angular app with Docker:

```sh
# Build the Docker image
sudo docker build -t final-project-app .

# Run the container (serves on http://localhost:8080)
sudo docker run -p 8080:80 final-project-app
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Project Overview

This project is an HTTP server designed to interface with an Arduino-based device, enabling remote operation and monitoring of various hardware components. The server receives requests from the Arduino to control and gather data from:

- **Force Sensor**: Connected via the HX711 load cell amplifier, used to measure force. Calibration methods are implemented to ensure accurate readings.
- **Motion Sensor**: Monitors movement and provides real-time feedback. Calibration methods are also applied for precise motion detection.
- **Driver**: Controls actuators or motors as required by the device.
- **Arduino**: Acts as the central controller, communicating with the server and other hardware components.

All device configurations are managed in the `devices.json` file, allowing for flexible hardware setup and easy updates.

## Important Algorithms and Equations

### Force Sensor Calibration (HX711)
The force sensor uses the HX711 module for precise measurement. Calibration is performed using the following equation:

```
calibrated_value = (raw_value - offset) / scale
```
- `raw_value`: The raw reading from the HX711
- `offset`: The zero-point offset determined during calibration
- `scale`: The scaling factor calculated using known weights

### Motion Sensor Calibration
Motion sensor readings are calibrated to ensure accurate detection of movement. The calibration typically involves:

```
calibrated_motion = (raw_motion - baseline) / sensitivity
```
- `raw_motion`: The raw value from the motion sensor
- `baseline`: The baseline value determined during calibration (e.g., when no motion is present)
- `sensitivity`: The factor that adjusts the sensor's responsiveness

### Device Communication
The server provides an HTTP API to control the Arduino, communicating with it via the Firmata protocol and the Johnny-Five library. This setup allows the server to send commands and receive sensor data seamlessly

## File Structure
- `devices.json`: Contains configuration details for all connected devices
- `src/app/services/http.service.ts`: Handles HTTP requests and device communication
- `src/app/calibiration-methods/`: Contains calibration logic for sensors

## Getting Started
1. Connect the Arduino and sensors as described in `devices.json`.
2. Start the HTTP server.
3. Use the Arduino to send requests and operate the device.
