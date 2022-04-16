import { configureLogger } from './config/log4js';
import { MyAppService } from './services/myAppService';
import { parseProgramArgs } from './config/programArguments';

const myAppService = new MyAppService();
const args = parseProgramArgs();
const logger = configureLogger(args.logFilename);

logger.info('Starting...');
myAppService.sayHello().then((value) => logger.info(value));
