# Build stage
FROM node:22-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Run stage
FROM node:22-slim

# Create a non-root user
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs

WORKDIR /app

# Copy app files
COPY --from=builder --chown=nodejs:nodejs /app ./

# Switch to non-root user
USER nodejs

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
