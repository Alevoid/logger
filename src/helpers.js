import { TYPE, COLORS } from './consts';

export function sortLogRequest(type, strings, ...values) {
  if (Array.isArray(strings)) {
    const [str, colors] = logger(type, strings, ...values);
    console.log(str, ...colors);
    return;
  }

  console.log(strings);
}

export function logger(logType, strings, ...values) {
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

  const addCssDirectiveTo = value => '%c' + value;

  let str = '';
  let color = getColorFromType(logType);
  let colors = [];

  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1] && typeof values[i - 1] === 'object') {
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
            // eslint-disable-next-line no-empty
          } catch (err) {
            //TODO: catch
          }
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
