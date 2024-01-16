function largestAltitude(gain: number[]): number {
  let points = [0, ...gain]
  let max = 0;
  for (let p in points) {
    let altitude = 0;
    for (let i = 0; i <= Number(p); i++) {
      altitude += points[i];
    }
    max = Math.max(max, altitude);
  }
  return max;  
};

largestAltitude([-5,1,5,0,-7]);

/* optimal solution
  function largestAltitude(gain: number[]): number {
    let highest = 0;
    let altitude = 0;
    for(let i = 0; i < gain.length; i++) {
        let temp;
        temp = altitude += gain[i]

        if(temp >= highest) {
            highest = temp;
        }

    }

    return highest;
    
};
*/