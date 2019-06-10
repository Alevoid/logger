import { TYPE } from "./consts";

const log = {
  info: (strings, ...values) => {
    const [str, colors] = logger(TYPE.INFO, strings, ...values);
    console.log(str, ...colors);
  },
  error: (strings, ...values) => {
    const [str, colors] = logger(TYPE.ERROR, strings, ...values);

    console.log(str, ...colors);
  },
  log: (strings, ...values) => {
    const [str, colors] = logger(TYPE.LOG, strings, ...values);
    console.log(str, ...colors);
  }
};

function logger(logType, strings, ...values) {
  const getColorFromType = type => {
    switch (type) {
      case TYPE.ERROR:
        return "color: red;";
      case TYPE.INFO:
        return "color: gray;";
      case TYPE.LOG:
        return "color: green;";
    }
  };

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
            str += " %c " + JSON.stringify(values[i - 1]);
            colors.push(color);
            str += " %c " + strings[i];
            colors.push("color: black;");
            continue;
          } catch (err) {}
        }
      }

      str += " %c " + values[i - 1];
      colors.push(color);
    }
    str += " %c " + strings[i];
    colors.push("color: black;");
  }

  return [str, colors];
}
