# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a static file server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
