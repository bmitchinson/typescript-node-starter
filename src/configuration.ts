import 'dotenv/config';
import * as env from 'env-var';

export const HELLO = env.get('HELLO').required().default('Mars').asString();
