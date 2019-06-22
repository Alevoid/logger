import should from "should";

import { logger } from "../helpers";
import { TYPE, COLORS } from "../consts";

const foobar = { foo: "bar" };

describe(`Logger function should return 
      1) correct types for 
          a) string to log;
          b) colors;
      2) correct occurrency for css directives in string to log;
      3) proper different colors for string and variables
`, () => {
  it(`for "LOG" method`, done => {
    const [stringToLog, colors] = logger(
      TYPE.LOG,
      ["Foobar ", " bar"],
      [foobar]
    );
    const cssDirectiveOccurenceCount = stringToLog.match(/%c/g);

    stringToLog.should.be.a.String();
    cssDirectiveOccurenceCount.should.have.lengthOf(colors.length);
    colors.should.be.a.Array().and.have.lengthOf(3);
    colors[0].should.equal(COLORS.NOT_A_VARIABLE);
    colors[1].should.equal(COLORS.LOG);
    colors[2].should.equal(COLORS.NOT_A_VARIABLE);

    done();
  });
  it(`for "Info" method`, done => {
    const [stringToLog, colors] = logger(
      TYPE.INFO,
      ["Foobar ", " bar"],
      [foobar]
    );
    const cssDirectiveOccurenceCount = stringToLog.match(/%c/g);

    stringToLog.should.be.a.String();
    cssDirectiveOccurenceCount.should.have.lengthOf(colors.length);
    colors.should.be.a.Array().and.have.lengthOf(3);
    colors[0].should.equal(COLORS.NOT_A_VARIABLE);
    colors[1].should.equal(COLORS.INFO);
    colors[2].should.equal(COLORS.NOT_A_VARIABLE);

    done();
  });
  it(`for "Error" method`, done => {
    const [stringToLog, colors] = logger(
      TYPE.ERROR,
      ["Foobar ", " bar"],
      [foobar]
    );
    const cssDirectiveOccurenceCount = stringToLog.match(/%c/g);

    stringToLog.should.be.a.String();
    cssDirectiveOccurenceCount.should.have.lengthOf(colors.length);
    colors.should.be.a.Array().and.have.lengthOf(3);
    colors[0].should.equal(COLORS.NOT_A_VARIABLE);
    colors[1].should.equal(COLORS.ERROR);
    colors[2].should.equal(COLORS.NOT_A_VARIABLE);

    done();
  });
});
