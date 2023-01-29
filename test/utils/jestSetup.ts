import dotenv from 'dotenv';

dotenv.config();

const customGlobal: any = global;

customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;
