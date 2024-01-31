function asteroidCollision(asteroids: number[]): number[] {

  for (let i = 0; i < asteroids.length; i++) {
      if (asteroids[i]*asteroids[i+1]<0) {
        if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1]) && asteroids[i] > 0) {
          asteroids[i+1] = 0;
          asteroids = asteroids.filter((asteroid) => asteroid !== 0);
          i > 0 ? i = i-2 : i = -1;
        } else if (Math.abs(asteroids[i]) > Math.abs(asteroids[i+1]) && asteroids[i] < 0) {
          continue;
        }
        
        else if ( Math.abs(asteroids[i]) < Math.abs(asteroids[i+1]) && asteroids[i] > 0) {
          asteroids[i] = 0;
          asteroids = asteroids.filter((asteroid) => asteroid !== 0);
          i > 0 ? i = i-2 : i = -1;
        } else if (Math.abs(asteroids[i]) < Math.abs(asteroids[i+1]) && asteroids[i] < 0) {
          continue;
        }

        else if (asteroids[i] > 0) {
          asteroids[i] = 0;
          asteroids[i+1] = 0;
          asteroids = asteroids.filter((asteroid) => asteroid !== 0);
          i > 1 ? i = i-2 : i = -1;
        } else {
          continue;
        }
      }
  }

  return asteroids;
}


console.log(asteroidCollision([5,10,-5]));
console.log(asteroidCollision([8,-8]));
console.log(asteroidCollision([10,2,-5]));
console.log(asteroidCollision([-2,-1,1,2]));
console.log(asteroidCollision([1,-1,1,-2]));
console.log(asteroidCollision([2,-1,-2,-2]));

/*

*/