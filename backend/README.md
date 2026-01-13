# Backend Setup Guide

## Manual Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
Create a `.env` file in the backend root directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secret_jwt_key_here
```

**Details:**
- `PORT`: Server port (default: 5000)
- `MONGO_URI`: MongoDB connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority`)
- `JWT_SECRET`: A random secret string for JWT token signing (use a strong random string)

### 3. MongoDB Setup

**Option A: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get the connection string and add it to `.env` as `MONGO_URI`

**Option B: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/your-database-name`

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000` (or the port specified in `.env`)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Tasks (Protected - requires authentication token)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Get all tasks (optionally filter by `?status=pending`)
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Environment Variables Required

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret for JWT tokens | `your-secret-key-123` |


