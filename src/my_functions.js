function asyncDouble(num, cb) {
  setTimeout(() => {
    if (typeof num !== 'number') {
      cb(new TypeError('Should be a number '));
    } else {
      cb(null, num * 2);
    }
  }, 200);
}

function checkWin (score) {
  if (score < 20) {
    throw new Error('Too low');
  } else {
    return 'You win!';
  }
}

module.exports = {
  asyncDouble,
  checkWin
}
