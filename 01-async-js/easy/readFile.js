const fs = require('fs');

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

for(let i =0;i<1000000000;i++){
  //idle loop so main thread is kept occupied
}

//file's console.log will be executed after the for loop
