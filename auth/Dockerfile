# Initialized base image
FROM node:alpine

# Setup application directory
WORKDIR /app
COPY package.json .

# Run installation
RUN npm install
COPY . .

# Start the application commans
CMD ["npm", "start"]
