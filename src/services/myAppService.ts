import { BASE_URL } from '../config/constants';
import { BaseService } from './baseService';

export class MyAppService extends BaseService {
  constructor() {
    super(BASE_URL);
  }

  async sayHello(): Promise<string> {
    return Promise.resolve("Hello world!");
  }
}
