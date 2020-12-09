const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10000000;
const filename = argv.output || 'listings.csv';
const stream = fs.createWriteStream(filename);

const createPost = (i) => {
  const listingId = i;
  const posted = faker.date.past();
  const sale = i % 2 !== 0;
  const pending = i % 5 !== 0;
  const construction = i % 15 !== 0;
  const homeAddress = faker.address.streetAddress();
  const price = Math.floor(Math.random() * (2000000 - 500000 + 1)) + 500000;
  const beds = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
  const baths = Math.floor(Math.random() * 3) + 1;
  const userId = Math.floor(Math.random() * 10000);

  return `${listingId},${posted},${sale},${pending},${construction},${homeAddress},${price},${beds},${baths},${userId}\n`;
};

const seed = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let ok = true;
    do {
      i -= 1;
      const post = createPost(i);
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(post, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(post, encoding);
      }
      // else call write and continue looping
    } while (i > 0 && ok);
    if (i > 0 && !ok) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// header line in the csv file
stream.write('listingId,posted,sale,pending,construction,homeAddress,price,beds,baths,userId\n', 'utf-8');

seed(stream, 'utf-8', () => {
  stream.end();
  console.log('finished seeding');
});
