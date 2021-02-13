// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Venue, Caterer } = initSchema(schema);

export {
  Post,
  Venue,
  Caterer
};