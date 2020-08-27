# AvailabilityComponent

## Component Info:

Contains a fullstack React mdoule with components for displaying the availabilty for Hostels

## Development

### Database Setup:
1. Start up a mysql server
2. Create a config.js file based on example.config.js
3. create a database named availability
4. Run /server/database/schema.sql

Seeding Database:
1. npm run seed

Starting Webpack
1. npm run build

Starting Server
1. npm start
2. Should be able to see it running at http://localhost:3009/hostels/50

### Endpoints

#### Get
| Endpoint       | Result |
|--------------- | :----: |
| /api/hostel | All Hostels |
| /api/hostel/:hostelId/rooms | All Rooms From Selected Hostel |

#### Post
| Endpoint       | Result |
|--------------- | :----: |
| /api/hostel | Creates new Hostel |
| /api/hostel/:hostelId/rooms | Creates new Room |

#### Put
| Endpoint       | Result |
|--------------- | :----: |
| /api/hostel | Updates Hostel |
| /api/hostel/:hostelId/rooms | Updates Room |

#### Delete
| Endpoint       | Result |
|--------------- | :----: |
| /api/hostel | Deletes Hostel and All Rooms Associated |
| /api/hostel/:hostelId/rooms | Deletes Room|








