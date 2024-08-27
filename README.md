# to-do-list-sequelize

A project to learn and demonstrate Sequelize usage with a simple to-do list API.

## Prerequisites

- Node.js (version X.X.X or higher)
- PostgreSQL (version X.X or higher)

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/to-do-list-sequelize.git
   cd to-do-list-sequelize
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure the database:
   - Create a PostgreSQL database for the project
   - Open `src/instances/pg.sequelize.ts`
   - Replace the database connection string with your credentials:
     ```typescript
     export const sequelize = new Sequelize('postgres://YOURUSER:password@localhost:5432/databaseName')
     ```

4. Set up environment variables:
   - Create a `.env` file in the project root
   - Add the following (adjust as needed):
     ```
     PORT=3000
     ```

## Running the Project

To start the development server:

```
npm run dev
```

The server will start on the port specified in your `.env` file (default: 3000).

## API Endpoints

- `GET /notes`: List all notes
- `POST /notes`: Add a new note
- `PUT /notes`: Update a note
- `DELETE /notes`: Remove a note

## Project Structure

- `src/server.ts`: Main application entry point
- `src/routes/`: API route definitions
- `src/controllers/`: Request handlers
- `src/models/`: Sequelize model definitions
- `src/instances/`: Database connection setup

## Technologies Used

- Express.js
- Sequelize
- PostgreSQL
- TypeScript

## Contributing

[Include instructions for how others can contribute to your project]

## License

[Specify the license under which your project is released]