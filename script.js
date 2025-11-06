document.getElementById("careForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const type = document.getElementById("skinType").value;
  const results = document.getElementById("results");
  let recommendation = "";

  switch (type) {
    case "dry":
      recommendation = `
        <h3>Dry Skin Care Routine:</h3>
        <ul>
          <li>Use gentle, hydrating cleansers.</li>
          <li>Apply rich moisturizer immediately after washing.</li>
          <li>Always use sunscreen during the day.</li>
        </ul>
        <h4>💧 Suggested Products (Face Wash, Moisturizer, Sunscreen, Serum):</h4>
        <ol>
          <li><b>Face Wash:</b> Cetaphil Gentle Cleanser – ₹250</li>
          <li><b>Moisturizer:</b> Nivea Soft Cream – ₹200</li>
          <li><b>Sunscreen:</b> Neutrogena Ultra Sheer SPF 50 – ₹600</li>
          <li><b>Serum:</b> L’Oreal Revitalift Hydrating Serum – ₹950</li>
        </ol>`;
      break;

    case "oily":
      recommendation = `
        <h3>Oily Skin Care Routine:</h3>
        <ul>
          <li>Cleanse with oil-control face wash twice daily.</li>
          <li>Use oil-free moisturizer.</li>
          <li>Apply matte sunscreen before going out.</li>
        </ul>
        <h4>💧 Suggested Products:</h4>
        <ol>
          <li><b>Face Wash:</b> Clean & Clear Foaming Wash – ₹120</li>
          <li><b>Moisturizer:</b> Plum Green Tea Oil-Free Moisturizer – ₹350</li>
          <li><b>Sunscreen:</b> La Shield Oil-Free SPF 40 – ₹750</li>
        </ol>`;
      break;

    case "combination":
      recommendation = `
        <h3>Combination Skin Care Routine:</h3>
        <ul>
          <li>Use a mild cleanser suitable for all skin types.</li>
          <li>Moisturize dry areas; keep T-zone oil-free.</li>
          <li>Don’t skip sunscreen.</li>
        </ul>
        <h4>💧 Suggested Products:</h4>
        <ol>
          <li><b>Face Wash:</b> Simple Refreshing Gel Wash – ₹180</li>
          <li><b>Moisturizer:</b> Lakme Peach Milk Lotion – ₹240</li>
          <li><b>Sunscreen:</b> Lotus Matte Gel SPF 50 – ₹600</li>
        </ol>`;
      break;

    case "sensitive":
      recommendation = `
        <h3>Sensitive Skin Care Routine:</h3>
        <ul>
          <li>Use fragrance-free and alcohol-free products.</li>
          <li>Apply aloe vera–based moisturizer.</li>
          <li>Use soothing sunscreen daily.</li>
        </ul>
        <h4>💧 Suggested Products:</h4>
        <ol>
          <li><b>Face Wash:</b> Simple Kind to Skin Cleanser – ₹250</li>
          <li><b>Moisturizer:</b> Cetaphil Moisturizing Cream – ₹400</li>
          <li><b>Sunscreen:</b> Avene Very High Protection SPF 50 – ₹950</li>
        </ol>`;
      break;

    case "normal":
      recommendation = `
        <h3>Normal Skin Care Routine:</h3>
        <ul>
          <li>Maintain cleansing, toning, and moisturizing daily.</li>
          <li>Stay hydrated and use sunscreen regularly.</li>
        </ul>
        <h4>💧 Suggested Products:</h4>
        <ol>
          <li><b>Face Wash:</b> Biotique Morning Nectar Cleanser – ₹130</li>
          <li><b>Moisturizer:</b> L’Oreal Hydrafresh Cream – ₹350</li>
          <li><b>Sunscreen:</b> Ponds Sun Protect SPF 30 – ₹250</li>
        </ol>`;
      break;

    default:
      recommendation = `<p>Please select a valid skin type.</p>`;
  }

  results.innerHTML = recommendation;
});
