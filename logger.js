import { TYPE, COLORS } from "./consts";

const log = {
  info: (strings, ...values) => {
    sortLogRequest(TYPE.INFO, strings, ...values);
  },
  error: (strings, ...values) => {
    sortLogRequest(TYPE.ERROR, strings, ...values);
  },
  log: (strings, ...values) => {
    sortLogRequest(TYPE.LOG, strings, ...values);
  }
};

function sortLogRequest(type, strings, ...values) {
  if (Array.isArray(strings)) {
    const [str, colors] = logger(type, strings, ...values);
    console.log(str, ...colors);
    return;
  }

  console.log(strings);
}

function logger(logType, strings, ...values) {
  const getColorFromType = type => {
    switch (type) {
      case TYPE.ERROR:
        return COLORS.ERROR;
      case TYPE.INFO:
        return COLORS.INFO;
      case TYPE.LOG:
        return COLORS.LOG;
      default:
        return COLORS.LOG;
    }
  };

  const addCssDirectiveTo = value => "%c" + value;

  var str = "";
  var color = getColorFromType(logType);
  var colors = [];

  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] == "object") {
        if (values[i - 1] instanceof Error) {
          if (values[i - 1].stack) {
            continue;
          }
        } else {
          try {
            str += addCssDirectiveTo(JSON.stringify(values[i - 1]));
            colors.push(color);
            str += addCssDirectiveTo(strings[i]);
            colors.push(COLORS.NOT_A_VARIABLE);
            continue;
          } catch (err) {}
        }
      }
      str += addCssDirectiveTo(values[i - 1]);
      colors.push(color);
    }
    str += addCssDirectiveTo(strings[i]);
    colors.push(COLORS.NOT_A_VARIABLE);
  }

  return [str, colors];
}

export default log;