const qnaSectionEl = document.getElementById("qna");

let qIdx = -1;

// mbti 조합이 될 array
let select = [];

// 11개의 질문
const ENDPOINT = 11;

const addAnswer = (answerContent, idx) => {
    const answerBoxEl = document.querySelector(".qna__answer");
    const answerEl = document.createElement("button");

    answerEl.className += "answer box";
    answerEl.innerHTML = answerContent;

    answerEl.addEventListener("click", () => {
        setTimeout(() => {
            select[qIdx] = idx;
            answerBoxEl.innerHTML = "";

            // console.log(select);

            goNext();
        }, 500);
    });

    answerBoxEl.appendChild(answerEl);
};

const calcScore = () => {
    let pointArray = [
        {name: "E", value: 0, key: 0},
        {name: "I", value: 0, key: 1},
        {name: "S", value: 0, key: 2},
        {name: "N", value: 0, key: 3},
        {name: "F", value: 0, key: 4},
        {name: "T", value: 0, key: 5},
        {name: "P", value: 0, key: 6},
        {name: "J", value: 0, key: 7},
    ];
    let resultMBTI = "";

    for (let i = 0; i < ENDPOINT; i++) {
        var target =qnaList[i].a[select[i]];

        for (let j = 0; j < target.type.length; j++) {
            for (let k = 0; k <pointArray.length; k++) {
                if (target.type[j] === pointArray[k].name) {
                    pointArray[k].value = pointArray[k].value + 1;
                }
            }
        }
    }

    for (let n = 0; n < pointArray.length / 2; n++) {
        if (pointArray[n * 2 + 1].value > pointArray[n*2].value) {
            resultMBTI += pointArray[n * 2 + 1].name;
        } else {
            resultMBTI += pointArray[n*2].name;
        }
    }

    console.log(pointArray);
    console.log(resultMBTI);

    return resultMBTI;
}

const goResult = () => {
    const resultSectionEl = document.getElementById("result");
    const mbti = calcScore();

    const mbtiResultEl = document.getElementById("mbtiResult");

    mbtiResultEl.innerHTML = mbti;

    setTimeout(() => {
        resultSectionEl.style.display = "block";
    }, 500);
};

const lastQuestion = () => {
    setTimeout(() => {
        qnaSectionEl.style.display = "none";
        goResult();
    }, 500);
};

const goNext = () => {
    if(qIdx++ === qnaList.length - 1) {
        lastQuestion();
        return;
    }

    const qNum = qnaList[qIdx];
    const q = document.getElementById("question");
    q.innerHTML = qNum.q;

    setTimeout(() => {
        const endIdx = qNum.a.length - 1;
        for (let i in qNum.a) {
            addAnswer(qNum.a[i].answer, i);
        }
    }, 500);
};

const startQandA = () => {
    const gateSectionEl = document.getElementById("gate");

    setTimeout(() => {
        window.scrollTo(0,0);
        gateSectionEl.style.display = "none";
        qnaSectionEl.style.display = "block";

        goNext();
    }, 1000);
    
};

const load = () => {
    const startButtonEl = document.getElementById("btnStart");

    startButtonEl.addEventListener("click", () => {
        try {
            startButtonEl.disabled = true;
            startQandA();
        } catch (error) {
            console.log(error);
        }
    });
};

window.onload = load();
