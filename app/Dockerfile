FROM node:16.13.2

# define our directory
WORKDIR /app

ENV PING_LISTEN_PORT=3000

# Copy all file we need
COPY /package*.json .

# install dependance
RUN npm i

COPY src .
COPY tsconfig.json .

# Run before the build the commande for the app
RUN npx tsc 

# Create a user 'appuser' and use it
RUN useradd -r appuser
USER appuser

# Run this after the build
CMD node build/index.js
# ENTRYPOINT [ "bin/sh" ]
