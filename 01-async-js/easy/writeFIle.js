const fs = require('fs');

fs.writeFile("a.txt", "cohort 2.0's hello!", function(err) {
  if (err) throw err;
});

fs.readFile( "a.txt", "utf8", function(err, data) {
  console.log(data);
});
