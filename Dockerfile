# Build the react app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all files and build the app and export static files
COPY . .
RUN npm run build

# Serve the app with nginx server
FROM nginx:alpine

# Copy built assets from `build` stage
COPY --from=build /app/out /usr/share/nginx/html

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]