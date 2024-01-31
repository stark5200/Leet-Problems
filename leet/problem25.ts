function asteroidCollision(asteroids: number[]): number[] {

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i]!==0) {
      if (asteroids[i]*asteroids[i+1]<0) {
        if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1]) && asteroids[i] > 0) {
          asteroids[i+1] = 0;
        } else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1]) && asteroids[i] < 0) {
          continue;
        }
        
        else if ( Math.abs(asteroids[i]) < Math.abs(asteroids[i+1]) && asteroids[i] > 0) {
          asteroids[i] = 0;
        } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i+1]) && asteroids[i] < 0) {
          continue;
        }
        
        else if (asteroids[i] > 0) {
          asteroids[i] = 0;
          asteroids[i+1] = 0;
        } else {
          continue;
        }
      }
    }
  }
    
  asteroids = asteroids.filter((asteroid) => asteroid !== 0);
  let positive: number[] = []
  let negative: number[] = []
  positive.push(...asteroids.filter((asteroid) => asteroid > 0));
  negative.push(...asteroids.filter((asteroid) => asteroid < 0));

  if (positive.length * negative.length === 0) {
    return asteroids;
  }
  
  return asteroidCollision(asteroids);
}


console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([-2,-1,1,2]));

/*

*/