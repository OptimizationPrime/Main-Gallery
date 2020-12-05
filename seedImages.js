const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10000000;
const filename = argv.output || 'images.csv';
const stream = fs.createWriteStream(filename);

const getImages = (j) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(`https://trulia-sdc.s3-us-west-1.amazonaws.com/listing${j % 10}/image${i}.jpg`);
  }

  return arr;
};

let li = 0;
let id = 0;
const createPost = (i) => {
  if (id === 10) {
    id = 0;
  }

  const imageId = i;
  const images = getImages(i);
  const listingId = id;

  li += 1;
  if (li === 10) {
    li = 0;
    id += 1;
  }

  return `${imageId},${images},${listingId}\n`;
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
stream.write('imageId,images,listingId\n', 'utf-8');

seed(stream, 'utf-8', () => {
  stream.end();
  console.log('finished seeding');
});
