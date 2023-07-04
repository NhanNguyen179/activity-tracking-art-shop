export const express = require('express');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/main');

const server = express();

async function bootstrap() {
    const app = await NestFactory.create(AppModule, server);
    // Additional NestJS configuration (e.g., pipes, filters, etc.) can go here
    await app.init();
}

bootstrap();

server.all('*', (req, res) => {
    const handler = app.getRequestHandler();
    return handler(req, res);
});
