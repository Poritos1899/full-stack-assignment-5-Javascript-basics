function calculateCircle() {
  const radius = parseFloat(document.getElementById('radius').value);
  if (isNaN(radius)) {
    document.getElementById('circle-result').innerText = "Please enter a valid number.";
    return;
  }
  const area = 3.1416 * radius * radius;
  document.getElementById('circle-result').innerText = `Area of Circle: ${area.toFixed(2)}`;
}

// function calculateCircle(radius) {
//   return Math.PI * radius * radius;
// }
// const r = Number(prompt("Enter circle radius"));
// console.log("Circle area:", calculateCircle(r));
