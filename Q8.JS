function racePromises(promises) {
    return Promise.race(promises);
  }
  
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1"), 1000);
  });
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2"), 500);
  });
  
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3"), 1500);
  });
  
  racePromises([p1, p2, p3])
    .then((value) => console.log("Resolved:", value))
    .catch((reason) => console.log("Rejected:", reason));
  