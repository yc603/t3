// 1. 题库数据（请自行修改题目和答案）
const questions = [
    { q: "我们的相遇是在哪一个季节？", a: ["春天", "夏天", "秋天", "冬天"], c: 1 },
    { q: "我最喜欢的奶茶口味是？", a: ["珍珠奶茶", "杨枝甘露", "抹茶拿铁", "柠檬茶"], c: 1 },
    { q: "今天是什么日子？", a: ["普通的一天", "你的生日", "我的生日", "发财的日子"], c: 1 },
    { q: "你是世界上最可爱的人吗？", a: ["不是", "当然是", "可能有争议", "不确定"], c: 1 },
    { q: "第5题：点击哪个能变美？", a: ["左边", "中间", "右边", "以上都是"], c: 3 },
    { q: "想吃火锅吗？", a: ["不想", "想疯了", "一般般", "你请我就去"], c: 1 },
    { q: "准备好迎接接下来的惊喜了吗？", a: ["准备好了", "还没", "快点吧", "保密"], c: 0 },
    { q: "我们的友谊会持续多久？", a: ["一年", "五年", "十年", "一辈子"], c: 3 },
    { q: "最后两个问题：累了吗？", a: ["累了", "不累", "还能答", "快结束吧"], c: 1 },
    { q: "最后：祝你生日？", a: ["开心", "健康", "万事如意", "以上全部"], c: 3 }
];

let currentStep = 0;
const bgm = document.getElementById('bgm');

// 场景切换逻辑
function nextScene(current) {
    document.getElementById(`scene${current}`).classList.remove('active');
    document.getElementById(`scene${current + 1}`).classList.add('active');
}

// 第一幕：开启挑战
document.getElementById('scene1').addEventListener('click', function(e) {
    if (e.target.id === 'scene1' || e.target.id === 'intro-text') {
        bgm.play();
        document.getElementById('intro-text').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        showQuestion();
    }
}, { once: false });

function showQuestion() {
    if (currentStep >= questions.length) {
        nextScene(1);
        return;
    }
    const data = questions[currentStep];
    document.getElementById('question').innerText = data.q;
    document.getElementById('progress').innerText = `进度: ${currentStep + 1} / 10`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    data.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = (e) => {
            e.stopPropagation();
            if (i === data.c) {
                currentStep++;
                showQuestion();
            } else {
                btn.style.backgroundColor = '#ffcccc';
                setTimeout(() => btn.style.backgroundColor = 'white', 500);
            }
        };
        optionsDiv.appendChild(btn);
    });
}

// 第二幕：吹蜡烛
document.getElementById('cake').addEventListener('click', function() {
    document.querySelector('.flame').classList.add('hidden');
    setTimeout(() => nextScene(2), 1000);
});

// 第三幕：开信封
document.getElementById('envelope').addEventListener('click', function() {
    this.classList.add('open');
    setTimeout(() => nextScene(3), 2000);
});
