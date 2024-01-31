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

/*  community solution:

function asteroidCollision(asteroids: number[]): number[] {
    // declare stack
    const stack: number[] = [];
    // iterate over asteroids
    for(let i = 0; i < asteroids.length; i++) {
        // get current asteroid
        let remain = asteroids[i]
        // while stack are not empty and current asteroid fly to left and top asteroid from stack are fly to the right:
        while(stack.length > 0 && remain < 0 && stack[stack.length - 1] > 0) {
            // we get asteroid from stack
            const asteroid = stack.pop()
            // we check if collision will destroy both asteroids
            if((asteroid + remain) === 0) remain = 0;
            // if false we set bigger one as remaing 
            else remain = asteroid + remain > 0 ? asteroid : remain
        }
        // if remaining asteroid are not destroyed i.e. equals 0 then we push it to stack
        if(remain) stack.push(remain)
    }
    // return remaining asteroids
    return stack;
};

*/