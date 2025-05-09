// تهيئة AOS عند تحميل الصفحة
AOS.init();

// دالة التحقق من التمارين (كما هو موجود في صفحة التمارين)
function checkQuiz() {
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var resultDiv = document.getElementById("quizResult");
  var score = 0;
  if (q1 === "4") score++;
  if (q2 === "8") score++;
  resultDiv.innerHTML = "<p>لقد أجبت بشكل صحيح على " + score + " من 2 أسئلة.</p>";
}

// دالة معالجة نموذج الاتصال (كما في صفحة التواصل)
function submitContact(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح! شكرًا لتواصلك.");
  document.getElementById("contactForm").reset();
}
