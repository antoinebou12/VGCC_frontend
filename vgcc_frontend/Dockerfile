# Use an official Node.js runtime as a parent image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN ng build --prod

# Use nginx as the final image
FROM nginx:alpine

# Copy the built Angular app to nginx public directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose port 4200
EXPOSE 4200

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
