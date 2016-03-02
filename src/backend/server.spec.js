import fs from 'fs';
import server from './server';
import request from 'superagent';
import { expect } from 'chai';
import { checkEqualityOfStreams } from './test/utils';

describe('votebox server', () => {

  before((done) => {
    server.start(7465, done);
  });

  it('listens on a port after starting', (done) => {
    request.get('localhost:7465').end(function (err) {
      expect(err).not.to.exist;
      done();
    });
  });

  it('sends a file like index.html', (done) => {
    const req = request.get('localhost:7465');
    checkEqualityOfStreams(
      fs.createReadStream(__dirname + '/../frontend/index.html'),
      req,
      done);
  });

});
