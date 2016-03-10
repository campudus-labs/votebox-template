import stream from 'stream';

export function checkEqualityOfStreams(expected, actual, done) {
  const checkEqualityStream = stream.Writable();
  checkEqualityStream._write = function retry(chunk, enc, next) {
    const other = expected.read(chunk.length);
    if (other === null || other.length < chunk.length) {
      setTimeout(() => retry(chunk, enc, next), Math.random() * 31);
      return;
    }
    if (chunk.equals(other)) {
      next();
    } else {
      next('not equal');
    }
  };
  checkEqualityStream.on('error', done);
  checkEqualityStream.on('finish', done);

  actual.pipe(checkEqualityStream);
}