import minimist from 'minimist';
import { ProgramArgs } from '../models/programArgs';
import { DEFAULT_LOG_FILENAME } from './constants';
import process from 'process';

export function parseProgramArgs(): ProgramArgs {
  const args = minimist(process.argv.slice(2));

  let logFilename: string = args['logfile'];

  if (!logFilename) {
    logFilename = DEFAULT_LOG_FILENAME;
  }

  return {
    logFilename
  };
}
