import app from './app'
import { port } from './config/environment';

const start = async () => {
  try {
    await app.listen(port);
    console.log(`🚀  GraphQL server running at port: ${port}`);
  } catch (err) {
    console.log("Error: " + err.message);
    console.log('Not able to run GraphQL server');
  }
};

start();