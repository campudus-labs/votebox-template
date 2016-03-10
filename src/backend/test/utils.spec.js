import fs from 'fs';
import { checkEqualityOfStreams } from './utils';
import { expect } from 'chai';

describe('stream equality check', () => {
  it('is okay for same two files', (done) => {
    const a = fs.createReadStream(__dirname + '/utils.js');
    const b = fs.createReadStream(__dirname + '/utils.js');
    checkEqualityOfStreams(a, b, (err) => {
      expect(err).not.to.exist;
      done();
    });
  });

  it('is always okay for same two files, even if done multiple times', (done) => {
    let counter = 50;
    for (let i = counter; i >= 0; i--) {
      const a = fs.createReadStream(__dirname + '/utils.js');
      const b = fs.createReadStream(__dirname + '/utils.js');
      checkEqualityOfStreams(a, b, (err) => {
        expect(err).not.to.exist;
        dec();
      });
    }

    function dec() {
      counter--;
      if (counter === 0) {
        done();
      }
    }
  });

  it('yields an error for different streams', (done) => {
    const a = fs.createReadStream(__dirname + '/utils.js');
    const b = fs.createReadStream(__dirname + '/../server.js');
    checkEqualityOfStreams(a, b, (err) => {
      expect(err).to.equal('not equal');
      done();
    });
  });

});
