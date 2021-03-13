const maximalRectangle = (matrix) => {
  
  
  const findLargestRectangle = (x, y) => {
    let len = findLargestSquare(x, y, 1);

    return Math.max(len*maxHeight(x, y, len, len), len*maxWidth(x, y, len, len))
  }

  const findLargestSquare = (x, y, len) => {
    
  }

  const maxHeight = (x, y, width, height) => {
    if (y+height > matrix.length) return height;

    for (let dx=0; dx<width; dx++){
      if (matrix[y+height][x+dx] === 0){
        return height;
      }
    }

    return maxHeight(x, y, width, height+1);
  }

  const maxWidth = (x, y, width, height) => {
    if (x+width > matrix[0].length) return width;

    for (let dy=0; dy<height; dy++){
      if (matrix[y+dy][x+width] === 0){
        return width;
      }
    }

    return maxHeight(x, y, width+1, height);
  }

  let maxArea = 0;

  for (let j=0; j<matrix.length; j++){
    for (let i=0; i<matrix[0].length; i++){
      maxArea = Math.max(maxArea, findLargestRectangle(i, j));
    }
  }

  return maxArea;

}