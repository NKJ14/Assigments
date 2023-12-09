const fs = require('fs');

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) throw err;
  
  console.log(data);

  fs.writeFile("a.txt",cleaner(data), (err) => {
    if (err) throw err;
  })      //cleaning the data


  fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) throw err;

    console.log(data);
  });      //printing it again

  
});

function cleaner(data){
  let result = data.replace(/\s+/g, ' ');
  //extra space gone by using regex

  return result;
}
