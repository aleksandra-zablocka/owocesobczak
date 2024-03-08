const cookies = document.querySelector(".cookies");

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("privacyPolicyAccepted")) {
    cookies.style.display = "block";
  } else {
    cookies.style.display = "none";
  }
});

function acceptPrivacyPolicy() {
  sessionStorage.setItem("privacyPolicyAccepted", "true");
  cookies.style.display = "none";
}
