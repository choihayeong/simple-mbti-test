import { useState } from "react";
import QnaItem from "../components/QnaItem";

const TestPage = () => {
    const [qIdx, setIdx] = useState(0);

    const getQuestionIdx = () => {
        setIdx(qIdx + 1);
    };

    // 아래 data는 react 상태 관리 라이브러리인 redux를 이용할 예정
    const qnaList = [
        {
            q: "붕어빵 장사를 시작했는데 손님이 한 명도 없엉",
            a: [
                {
                    answer: "a) 사람들에게 붕어빵을 적극적으로 홍보함",
                    type: ["E"]
                },
                {
                    answer: "b) 차분히 기다리면서 붕어빵을 준비함",
                    type: ["I"]
                }
            ]
        },
        {
            q: "드디어 기다리던 손님이 왔어용! 붕어빵을 건네주며 어떻게 말할까요?",
            a: [
                {
                    answer: "a) 나의 첫 번째 손님인 걸 알려주고 앞으로 자주 와달라고 함",
                    type: ["E"]
                },
                {
                    answer: "b) 그냥 웃으며 감사합니다 함",
                    type: ["I"]
                },
            ]
        },
        {
            q: "이제 조금씩 손님이 오고 있어요, 한 번에 몇 개의 붕어빵을 구울까요?",
            a: [
                {
                    answer: "손님에 따라 그때그때 다르게",
                    type: ["P", "N"]
                },
                {
                    answer: "헷갈리지 않게 같은 양",
                    type: ["J", "S"]
                },
            ]
        },
        {
            q: "막 구운 붕어빵을 먹던 손님이 추억의 맛이 난다고 얘기함",
            a: [
                {
                    answer: "아 뭔지 알아여 붕어빵은 추억의 맛이죠",
                    type: ["F"]
                },
                {
                    answer: "붕어빵은 보통 같은 재료가 들어가고 맛이 늘 변함이 없으니까여",
                    type: ["T"]
                },
            ]
        },
        {
            q: "점점 장사가 잘 되고 있네여! 손님들이 왜 이렇게 맛있냐고 물을 때 나는?",
            a: [
                {
                    answer: "좋은 재료가 들어간 걸 말함",
                    type: ["T"]
                },
                {
                    answer: "나의 마음과 정성이 담겨 있다고 말함",
                    type: ["F"]
                },
            ]
        },
        {
            q: "조용히 붕어빵을 먹던 한 손님이 붕어빵이 너무 비싸네... 라고 합니다.",
            a: [
                {
                    answer: "힘들게 굽고 있는데 저러니까 화가 나서 표정이 굳는다",
                    type: ["F", "I"]
                },
                {
                    answer: "재료비와 품질을 설명하며 가격이 합리적임을 설명함",
                    type: ["T", "E"]
                },
            ]
        },
        {
            q: "붕어빵을 구우면서 생각해 보니 너무 뻔한 맛밖에 없는 것 같음",
            a: [
                {
                    answer: "기존에 있는 걸 조금 변형해 볼까?",
                    type: ["S"]
                },
                {
                    answer: "완전히 새로운 맛을 생각해 보자",
                    type: ["N"]
                },
            ]
        },
        {
            q: "붕어빵을 사간 손님이 맛없다고 다시 구워달라고 찾아왔어요",
            a: [
                {
                    answer: "ㅈㅅ 바로 교환해드림 하고 좋게 교환해줌",
                    type: ["S"]
                },
                {
                    answer: "어떤 부분이 구체적으로 맘에 안드셨음?",
                    type: ["N"]
                },
            ]
        },
        {
            q: "한 손님이 붕어빵 가게 앞에서 살까 말까 망설이고 있는 것 같아요",
            a: [
                {
                    answer: "맛있으니 한번 드셔보세요! 하고 자신 있게 권함",
                    type: ["E"]
                },
                {
                    answer: "손님이 결정을 내릴 때까지 기다림",
                    type: ["I"]
                },
            ]
        },
        {
            q: "나는 붕어빵을 만들 때 어떤 식으로 만들고 있나요?",
            a: [
                {
                    answer: "정확한 비율을 맞춰 일정한 양으로",
                    type: ["J"]
                },
                {
                    answer: "감으로 양을 맞춰가며 만듦",
                    type: ["P"]
                },
            ]
        },
        {
            q: "오늘 장사 끝! 내일의 목표는?",
            a: [
                {
                    answer: "손님에 따라 다르니 무계획. 쉬는 시간도 정하진 않음",
                    type: ["P"]
                },
                {
                    answer: "내일은 100개 팔고 휴식은 이때쯤 가져야지",
                    type: ["J"]
                },
            ]
        },
        {
            q: "고된 하루가 끝났어요, 지친 몸을 이끌고 집에 도착했는데...",
            a: [
                {
                    answer: "아이고 힘들다 쉬다가 정리하셈",
                    type: ["P"]
                },
                {
                    answer: "남은 재료 정리하고 장부 확인하고 쉬어야지",
                    type: ["J"]
                },
            ]
        },
    ];

    return (
        <section id="qna" className="qna">
            <QnaItem question={qnaList[qIdx].q} answers={qnaList[qIdx].a} handleQuestion={getQuestionIdx} />

            {/* {qnaList.map((item, index) => (<QnaItem key={index} question={item.q} answers={item.a} />))} */}
        </section>
    );
};

export default TestPage;