function waitASec(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
      console.log(i);
    }, 1000);
  });
}

async function counter(tillNum) {
  for (let i = 0; i <= tillNum; i++) {
    await waitASec(i);
  }
}

counter(10);
