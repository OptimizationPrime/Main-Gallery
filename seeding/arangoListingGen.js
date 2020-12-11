const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');
const userData = require('./arangoUserData.js');

const lines = argv.lines || 100;
const filename = argv.output || 'arangoDataFake.json';
const stream = fs.createWriteStream(filename);

const createPost = (i) => {
  const userId = (Math.floor(Math.random() * 10000)).toString();
  const _key = i.toString();
  const posted = faker.date.past();
  const sale = i % 2 !== 0;
  const pending = i % 5 !== 0;
  const construction = i % 15 !== 0;
  const homeAddress = faker.address.streetAddress();
  const price = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
  const beds = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  const baths = Math.floor(Math.random() * 3) + 1;

  return {
    _key,
    userId,
    posted,
    sale,
    pending,
    construction,
    homeAddress,
    price,
    beds,
    baths,
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
