// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const wait = ms =>
    new Promise((resolve, reject) => {
      if (time === time * time) {
        reject(time);
      }
      resolve(time);
    });
  return wait();
}

export function asyncDelay(time) {
  return delay(time);
}
