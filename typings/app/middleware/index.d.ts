// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCors from '../../../app/middleware/cors';
import ExportResponse from '../../../app/middleware/response';

declare module 'egg' {
  interface IMiddleware {
    cors: typeof ExportCors;
    response: typeof ExportResponse;
  }
}
