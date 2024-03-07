const cookies = document.querySelector(".cookies");

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("privacyPolicyAccepted")) {
    cookies.style.display = "block";
  } else {
    cookies.style.display = "none";
  }
});

function acceptPrivacyPolicy() {
  localStorage.setItem("privacyPolicyAccepted", "true");
  cookies.style.display = "none";
}
