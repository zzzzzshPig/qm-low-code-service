// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEdit from '../../../app/controller/edit';

declare module 'egg' {
  interface IController {
    edit: ExportEdit;
  }
}
