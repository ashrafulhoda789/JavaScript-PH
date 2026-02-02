const heights = [65, 66, 68, 72, 78, 60, 65, 66];

let max = heights[0];
for(const h of heights){
    if(h > max){
        max = h;
    }
}

console.log(max);