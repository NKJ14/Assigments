function waitASec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}

async function clock() {
  while(true){
    let currentTime = new Date();
    
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let time = `${hours}:${minutes}:${seconds}`;
    
    console.clear();
    
    console.log(time);
    
    await waitASec();
  }
}

clock();
