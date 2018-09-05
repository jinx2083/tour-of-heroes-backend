FROM node:8

WORKDIR /

# Creates the project directories
RUN mkdir ./services
RUN mkdir ./routes

# Copying the code in the docker container
COPY ./app.js .
COPY ./services/* ./services
COPY ./routes/* ./routes
COPY ./package.json .

# Install the dependecies
RUN npm install

# Open port 3000
EXPOSE 3000

# Run the project
ENTRYPOINT sh -c 'node ./app.js'