function marathonDistance(arr) {
    if (!arr || arr.length === 0) return false;
  
    const total = arr.reduce((sum, num) => sum + Math.abs(num), 0);
    return total === 25;
  }
  