import dotenv from 'dotenv';
import { initFbt } from '../src/utils/fbt';

dotenv.config();

const customGlobal: any = global;

customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

initFbt();
