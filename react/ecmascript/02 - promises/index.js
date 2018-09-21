// Hint: use setInterval, create a new Promise and measure time with Date.now()

const maxTime = 250000;
export function delay(time) {
  const start = Date.now();
  const ms = new Promise((resolve, reject) => {
    if (time >= maxTime) {
      reject(Error('This time is too much !'));
    } else {
      setTimeout(() => {
        const end = Date.now();
        resolve(end - start);
      }, time);
    }
  });
  return ms;
}

export function asyncDelay(time) {
  return delay(time);
}
