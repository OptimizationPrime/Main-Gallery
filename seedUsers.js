const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10000;
const filename = argv.output || 'users.csv';
const stream = fs.createWriteStream(filename);

const createPost = (i) => {
  const userId = i;
  const username = faker.internet.userName();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();

  return `${userId},${username},${firstName},${lastName},${email},${phone}\n`;
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
stream.write('userId,username,firstName,lastName,email,phone\n', 'utf-8');

seed(stream, 'utf-8', () => {
  stream.end();
  console.log('finished seeding');
});
