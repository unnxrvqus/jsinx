# Stack Bootstrapper

A small project that automates the creation of a basic backend development environment using Docker.

## Things it does

1. Generates a `docker-compose.yml` file.
2. Creates an NGINX container with a basic configuration.
3. Creates a PostgreSQL container with default settings.
4. Creates a Node.js (Express) application container.
5. Configures networking between all services.
6. Generates the required project structure.
7. Creates starter configuration files (`Dockerfile`, `.dockerignore`, `.env.example`, etc.).
8. Starts the entire stack with a single command.

## Goal

Reduce the time required to bootstrap a new backend project from minutes to seconds.