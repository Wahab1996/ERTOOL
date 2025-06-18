document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dose-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const drug = document.getElementById("drug").value;

    if (isNaN(weight) || weight <= 0) {
      result.innerHTML = "<p>Please enter a valid weight.</p>";
      return;
    }

    const doses = {
      paracetamol: 15,
      ibuprofen: 10,
      ceftriaxone: 50,
      diazepam: 0.3,
      adrenaline: 0.01
    };

    const dosePerKg = doses[drug];
    const totalDose = (dosePerKg * weight).toFixed(2);

    result.innerHTML = `<p>Total Dose: <strong>${totalDose} mg</strong></p>`;
  });
});
