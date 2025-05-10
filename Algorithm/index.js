// index.js
function analyzeSentence() {
    const input = document.getElementById("sentenceInput").value.trim();
  
    // Basic validation
    if (!input.endsWith(".")) {
      alert("Please make sure your sentence ends with a period.");
      return;
    }
  
    let length = 0;
    let words = 0;
    let vowels = 0;
    let inWord = false;
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      length++;
  
      // Count vowels
      if ("aeiouAEIOU".includes(char)) {
        vowels++;
      }
  
      // Word detection
      if (char !== ' ' && inWord === false) {
        words++;
        inWord = true;
      }
      if (char === ' ') {
        inWord = false;
      }
  
      // Stop at period
      if (char === '.') {
        break;
      }
    }
  
    // Output results
    document.getElementById("length").textContent = length;
    document.getElementById("words").textContent = words;
    document.getElementById("vowels").textContent = vowels;
  }
  
