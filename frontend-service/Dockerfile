FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port that the React app will use
EXPOSE 3000

# Run the command to start the React app when the container launches
CMD ["npm", "start"]