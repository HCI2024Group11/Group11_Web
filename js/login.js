// Toggle between Register and Login forms
function toggleForms() {
  document.getElementById("registerForm").classList.toggle("hidden");
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("forgotPasswordForm").classList.add("hidden");
  document.getElementById("codeEntryForm").classList.add("hidden");
  document.getElementById("setNewPasswordForm").classList.add("hidden");
}

// Show Forgot Password Form
function showForgotPasswordForm() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("forgotPasswordForm").classList.remove("hidden");
  document.getElementById("codeEntryForm").classList.add("hidden");
  document.getElementById("setNewPasswordForm").classList.add("hidden");
}

// Handle Forgot Password Form submission
function handleForgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById("resetEmail").value;

  // Simulate email check and response
  if (email === "test@example.com") {
    document.getElementById("successMessage").classList.remove("hidden");
    document.getElementById("errorMessage").classList.add("hidden");
    setTimeout(showCodeEntryForm, 2000);
  } else {
    document.getElementById("errorMessage").classList.remove("hidden");
    document.getElementById("successMessage").classList.add("hidden");
  }
}

// Show Code Entry Form
function showCodeEntryForm() {
  document.getElementById("forgotPasswordForm").classList.add("hidden");
  document.getElementById("codeEntryForm").classList.remove("hidden");
  document.getElementById("setNewPasswordForm").classList.add("hidden");
}

// Show Set New Password Form
function showSetNewPasswordForm() {
  document.getElementById("codeEntryForm").classList.add("hidden");
  document.getElementById("setNewPasswordForm").classList.remove("hidden");
}

// Handle Reset Password Form submission
function resetPassword(event) {
  event.preventDefault();
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword === confirmPassword) {
    document
      .getElementById("passwordSuccessMessage")
      .classList.remove("hidden");
    document.getElementById("passwordErrorMessage").classList.add("hidden");
  } else {
    document.getElementById("passwordErrorMessage").classList.remove("hidden");
    document.getElementById("passwordSuccessMessage").classList.add("hidden");
  }
}

// Resend code action
function resendCode() {
  alert("Reset code has been resent to your email.");
}

// Tự động hiển thị đúng form dựa trên query parameter
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const formType = params.get("form");

  if (formType === "register") {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
  } else {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
  }
};
