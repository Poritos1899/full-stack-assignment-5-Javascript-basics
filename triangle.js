function calculateTriangle() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);
  if (isNaN(base) || isNaN(height)) {
    document.getElementById('triangle-result').innerText = "Please enter valid numbers.";
    return;
  }
  const area = 0.5 * base * height;
  document.getElementById('triangle-result').innerText = `Area of Triangle: ${area}`;
}

// function calculateTriangle(base, height) {
//   return 0.5 * base * height;
// }
// const b = Number(prompt("Enter triangle base"));
// const h = Number(prompt("Enter triangle height"));
// console.log("Triangle area:", calculateTriangle(b, h));