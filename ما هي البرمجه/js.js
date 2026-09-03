// تأثير آلة الكتابة
const codeLines = [
	'print("Hello, World!");',
	'console.log("Learn Coding");',
	'while(!success) { tryAgain(); }',
	'const dev = new Developer();'
];
let lineIndex = 0;

setInterval(() => {
	const typewriter = document.getElementById('typewriter');
	typewriter.textContent = codeLines[lineIndex];
	lineIndex = (lineIndex + 1) % codeLines.length;
}, 2500);

// مولد النصائح البرمجية
const tips = [
	"الكود النظيف أهم من الكود الذي يعمل فقط. اكتب كوداً يفهمه البشر وليس الآلة فقط.",
	"لا تحفظ الأكواد، بل افهم المنطق وراءها. الحفظ يأتي مع الممارسة.",
	"إذا واجهت خطأ (Bug)، فالخطأ دائماً في كودك وليس في اللغة أو المترجم!",
	"أفضل طريقة لتعلم البرمجة هي بناء مشاريع حقيقية، حتى لو كانت صغيرة جداً.",
	"خذ استراحة كل ساعة. العقل المتعب لا يكتب كوداً جيداً.",
	"Google و Stack Overflow هما أفضل صديقين للمبرمج، لا تخجل من البحث.",
	"البرمجة ليست مجرد كتابة أكواد، بل هي مهارة حل المشكلات بطرق إبداعية.",
	"تعلم لغة واحدة جيداً، أفضل من تعلم 5 لغات بشكل سطحي."
];

function generateTip() {
	const tipBox = document.getElementById('tipBox');
	const randomIndex = Math.floor(Math.random() * tips.length);

	tipBox.style.opacity = '0';
	setTimeout(() => {
		tipBox.textContent = `"${tips[randomIndex]}"`;
		tipBox.style.opacity = '1';
	}, 400);
}

// تأثير الظهور عند التمرير
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		}
	});
}, { threshold: 0.2 });

reveals.forEach(element => observer.observe(element));

// تأثير 3D للكود مع حركة الماوس
const code3d = document.getElementById('code3d');
const code3d2 = document.getElementById('code3d_2');

document.addEventListener('mousemove', (event) => {
	const x = (window.innerWidth / 2 - event.clientX) / 50;
	const y = (window.innerHeight / 2 - event.clientY) / 50;

	if (code3d) code3d.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
	if (code3d2) code3d2.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});
