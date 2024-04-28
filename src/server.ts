import express, { Application } from 'express';

export class Server {
  app: Application

  constructor(app: Application) {
    this.app = app;
  }

  listen(port: number) {
    if (!this.app) {
      throw new Error('App not provided!');
    }

    if (!port) {
      throw new Error('Please provided a port number');
    }

    this.app.listen(port, () => {
      console.log(`✅ SUCCESS: Server is up and running on http://localhost:${port}`);
    });
  }
}