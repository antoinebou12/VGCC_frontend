# Use an official Node.js runtime as a parent image
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Run a clean install of the dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN ng build --configuration=production

# Use nginx as the final image
FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app to nginx public directory
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Expose port 4200
EXPOSE 4200

# Command to run the nginx server
#CMD ["nginx", "-g", "daemon off;"]

# Build: docker build -t vgcc_frontend .
# Run the container: docker run -d -p 4200:4200 vgcc_frontend