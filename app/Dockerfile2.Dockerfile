FROM node:16.13.2 AS builder

# define our directory
WORKDIR /app

# Copy all file we need
COPY /package*.json .

# install dependance
RUN npm i

COPY src .
COPY tsconfig.json .

# Run before the build the commande for the app
RUN npx tsc 


FROM node:16.13.2
WORKDIR /app
ENV PING_LISTEN_PORT=3000
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder app/build/index.js .

# Create a user 'appuser' and use it
RUN useradd -r appuser
USER appuser

# Run this after the build
CMD node index.js
# ENTRYPOINT "bin/sh"
