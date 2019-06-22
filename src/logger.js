import { sortLogRequest } from './helpers';
import { TYPE } from './consts';

const log = {
  info: (strings, ...values) => {
    sortLogRequest(TYPE.INFO, strings, ...values);
  },
  error: (strings, ...values) => {
    sortLogRequest(TYPE.ERROR, strings, ...values);
  },
  log: (strings, ...values) => {
    sortLogRequest(TYPE.LOG, strings, ...values);
  },
};

export default log;
