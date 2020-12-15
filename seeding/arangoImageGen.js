const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');
const userData = require('./arangoUserData.js');

const lines = argv.lines || 100000000;
const filename = argv.output || 'arangoImageData.json';
const stream = fs.createWriteStream(filename);

let j = 9;
let li = lines / 10 - 1;
const createPost = (i) => {
  const _key = i.toString();
  const listingId = li.toString();
  const image = `https://trulia-sdc.s3-us-west-1.amazonaws.com/listing${li}/image${j}.jpg`;

  j -= 1;

  if (j < 0) {
    j = 9;
    li -= 1;
  }

  return {
    _key,
    image,
    listingId,
  };
};

const seed = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let ok = true;
    do {
      i -= 1;
      const post = JSON.stringify(createPost(i));
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        ok = writeStream.write(post, encoding);
      }
      writeStream.write('\n');
      // else call write and continue looping
    } while (i > 0 && ok);
    if (i > 0 && !ok) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// header line in the csv file
// stream.write('utf8');

seed(stream, 'utf8', () => {
  stream.end();
  console.log('finished seeding');
});
