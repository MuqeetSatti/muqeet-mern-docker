# Step 1: Use Node.js base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all source files
COPY . .

# Step 5: Expose the port your app runs on
EXPOSE 5000

# Step 6: Run the app
CMD ["node", "index.js"]

