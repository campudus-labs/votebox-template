import stream from 'stream';

export function checkEqualityOfStreams(expected, actual, done) {
  const checkEqualityStream = stream.Writable();
  checkEqualityStream._write = (chunk, enc, next) => {
    const other = expected.read(chunk.length);
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