function generateOTP() {
  // Helper function to check if a number has consecutive or repeated digits
  function hasConsecutiveOrRepeatedDigits(num) {
      const digits = num.toString().split('');
      for (let i = 1; i < digits.length; i++) {
          // Check for consecutive digits (e.g., 12, 23)
          if (parseInt(digits[i]) === parseInt(digits[i - 1]) + 1 || parseInt(digits[i]) === parseInt(digits[i - 1]) - 1) {
              return true;
          }
          // Check for repeated digits (e.g., 11, 22)
          if (digits[i] === digits[i - 1]) {
              return true;
          }
      }
      return false;
  }

  let otp;
  do {
      otp = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  } while (hasConsecutiveOrRepeatedDigits(otp)); // Regenerate if consecutive or repeated digits are found

  // Display OTP on the page
  document.getElementById("otp-text").textContent = otp.toString();
  document.getElementById("otp-container").style.display = "block"; // Show OTP container
}

function copyOTP() {
  // Get OTP text element
  const otpText = document.getElementById("otp-text").textContent;

  // Create a temporary input field to copy the OTP
  const tempInput = document.createElement("input");
  document.body.appendChild(tempInput);
  tempInput.value = otpText;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Alert user with a confirmation message
  alert("OTP copied to clipboard!");
}