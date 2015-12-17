function randchars(n, chartable) {
  if (!chartable)
    chartable = randchars.table.all;

  var c = '';
  var l = chartable.length;

  for (var i = 0; i < n; i++) {
    c += chartable.charAt(Math.floor(l * Math.random()));
  }

  return c;
}

randchars.table = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};

randchars.table.all = randchars.table.lowercase + randchars.table.uppercase + randchars.table.number + randchars.table.symbol;

if (typeof module != 'undefined' && module.exports)
  module.exports = randchars;
