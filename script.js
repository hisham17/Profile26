function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

// const form = document.getElementById("contactForm");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   alert("Message sent successfully!");
//   form.reset();
// });
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // نمنع التحديث لأننا سنرسل البيانات يدوياً

  // تجهيز البيانات لإرسالها
  const formData = new FormData(form);

  // إرسال البيانات إلى Formspree باستخدام fetch
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Message sent successfully! 🎉");
    form.reset(); // تفريغ الحقول بعد النجاح
  } else {
    alert("Oops! There was a problem sending your message.");
  }
});
// تغيير كلمة "أهلاً" إلى لغات أخرى عند مرور الفأرة
const welcomeMsg = document.querySelector(".about-section h2");
welcomeMsg.addEventListener("mouseover", () => {
  welcomeMsg.innerText = "Welcome! 🌍";
});
welcomeMsg.addEventListener("mouseout", () => {
  welcomeMsg.innerText = "من أنا؟ 💡";
});
