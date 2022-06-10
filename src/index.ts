import { Environment } from './config/enviroment';
import server from './server';

Environment.setup();

import { Application } from 'express';
import { config } from './config/config';
import database from './database';

async function startApiServer() {
  await database.setup();
  const app: Application = await server.server();
  app.listen(config.SERVER_PORT, () => {
    console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  });

  return app;
}

export default startApiServer();

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});
