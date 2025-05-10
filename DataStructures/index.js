// Problem 1: Sum of Distinct Elements in Two Sets
function sumOfDistinctElements() {
    const set1 = [3, 1, 7, 9];
    const set2 = [2, 4, 1, 9, 3];
    let sum = 0;
  
    // Combine and count
    let allElements = set1.concat(set2);
    let elementCount = {};
  
    for (let num of allElements) {
      elementCount[num] = (elementCount[num] || 0) + 1;
    }
  
    for (let key in elementCount) {
      if (elementCount[key] === 1) {
        sum += parseInt(key);
      }
    }
  
    document.getElementById("sumResult").textContent = sum;
  }
  
  // Problem 2: Dot Product and Orthogonality
  function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  function checkOrthogonality() {
    const v1 = [1, 2, 3];
    const v2 = [4, -5, 6];
  
    const result = dot_product(v1, v2);
    const isOrthogonal = result === 0 ? "Yes" : "No";
  
    document.getElementById("dotProduct").textContent = result;
    document.getElementById("isOrthogonal").textContent = isOrthogonal;
  }
  