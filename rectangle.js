function calculateRectangle() {
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  if (isNaN(length) || isNaN(width)) {
    document.getElementById('rectangle-result').innerText = "Please enter valid numbers.";
    return;
  }
  const area = length * width;
  document.getElementById('rectangle-result').innerText = `Area of Rectangle: ${area}`;
}

// function calculateRectangle(length, width) {
//   return length * width;
// }
// const l = Number(prompt("Enter rectangle length"));
// const w = Number(prompt("Enter rectangle width"));
// console.log("Rectangle area:", calculateRectangle(l, w));