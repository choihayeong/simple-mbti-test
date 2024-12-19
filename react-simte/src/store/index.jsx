import { createStore } from "redux";

// DUMMY DATA
const json = [
    {
        idx: "fish-bread",
        title: "붕어빵 mbti 테스트",
        qnaList: [
            {
                q: "붕어빵 장사를 시작해보려고 합니다. 당신은 손님 유치를 할 것인가요?",
                a: [
                    {
                        answer: "a) 사람들에게 적극적으로 홍보함",
                        part: ["E"]
                    },
                    {
                        answer: "b) 차분히 기다리면서 붕어빵을 준비함",
                        part: ["I"]
                    }
                ]
            },
            {
                q: "손님이 왔습니다. 붕어빵을 건네주면서 어떤 말을 할 것인가요?",
                a: [
                    {
                        answer: "a) 럭키비키 당신은 나의 첫 번째 손님입니다! 서비스로 하나 더 쥼",
                        part: ["J"]
                    },
                    {
                        answer: "b) 그냥 웃으며 감사합니다~ 라고 하면서 자주 오시면 서비스도 주겠다고 함",
                        part: ["P"]
                    },
                ]
            },
            {
                q: "이제 조금씩 손님이 오고 있어요, 한 번에 몇 개의 붕어빵을 구울까요?",
                a: [
                    {
                        answer: "a) 손님에 따라 그때그때 다르게",
                        part: ["P", "N"]
                    },
                    {
                        answer: "b) 헷갈리지 않게 같은 양",
                        part: ["J", "S"]
                    },
                ]
            },
            {
                q: "막 구운 붕어빵을 먹던 손님이 추억의 맛이 난다고 얘기합니다. 당신은 뭐라고 대답할건가요?",
                a: [
                    {
                        answer: "맞아요, 붕어빵은 추억의 맛이죠~",
                        part: ["F"]
                    },
                    {
                        answer: "붕어빵은 대개 같은 재료가 들어가고 맛이 늘 변함이 없으니까여",
                        part: ["T"]
                    },
                ]
            },
        ],
        result: [],
    },
    {
        idx: "merry-x-mas",
        title: "크리스마스 mbti 테스트",
        qnaList: [
            {
                q: "눈이 펑펑 내리는 크리스마스 어떰?",
                a: [
                    {
                        answer: "a) 낭만적이야!",
                        part: ["E", "F"]
                    },
                    {
                        answer: "b) 차 막힐까봐 걱정됨됨",
                        part: ["I", "T"]
                    }
                ]
            },
            {
                q: "사람들이 잔뜩 모인 크리스마스 파티!",
                a: [
                    {
                        answer: "a) 두근... 세근... 네근...",
                        part: ["E"]
                    },
                    {
                        answer: "b) 설레지만 조금 지치는걸?",
                        part: ["I"]
                    },
                ]
            },
            {
                q: "나는 크리스마스 선물을을",
                a: [
                    {
                        answer: "a) 미리 사두는 편",
                        part: ["J", "N"]
                    },
                    {
                        answer: "b) 급하게 준비하는 편",
                        part: ["P", "S"]
                    },
                ]
            },
            {
                q: "왜 우리는 산타 할아버지한테 선물을 못 받을까?",
                a: [
                    {
                        answer: "나쁜 아이라서? 어린이가 아니라서?",
                        part: ["F", "N"]
                    },
                    {
                        answer: "산타는 없으니까...",
                        part: ["T","N","S"]
                    },
                ]
            },
        ],
        result: [],
    },
    {
        idx: "goodbye-2024",
        title: "연말 mbti 테스트",
        qnaList: [
            {
                q: "연말연초가 다가오고 있어요~ 당신의 심정은?",
                a: [
                    {
                        answer: "a) 매우 들뜨고 흥분됨",
                        part: ["E", "N"]
                    },
                    {
                        answer: "b) 한 해가 끝나가는 것 같아서 우울함",
                        part: ["I", "F", "S"]
                    }
                ]
            },
            {
                q: "회사에서 연말이라고 송년회 이벤트를 준비하자고 합니다.",
                a: [
                    {
                        answer: "a) 뭐 이런걸 준비한담? 귀찮아 한다.",
                        part: ["I", "T", "S"]
                    },
                    {
                        answer: "b) 연말 이벤트라고? 뭐가 있을까? ㄷㄱㄷㄱㄱ",
                        part: ["E", "F", "N"]
                    },
                ]
            },
            {
                q: `${new Date().getFullYear()}년을 회고해보는 시간을 갖게 됩니다.`,
                a: [
                    {
                        answer: "a) 회고는 무슨... 내년에 잘하면 됨됨",
                        part: ["P", "S"]
                    },
                    {
                        answer: "b) 올해는 이런 점이 좋았고... 이런 점이 아쉬웠고... 내년에 잘해보자!",
                        part: ["J", "N"]
                    },
                ]
            },
            {
                q: "올해를 한 문장으로 표현하자면?",
                a: [
                    {
                        answer: "내가 한 행동과 결과가 분명히 기억나는 한 해",
                        part: ["T"]
                    },
                    {
                        answer: "여러 감정이 머릿속을 떠다니는 한 해",
                        part: ["F"]
                    },
                ]
            },
            {
                q: "올해 가장 감동적인 순간을 떠올린다면?",
                a: [
                    {
                        answer: "누군가의 진심어린 감사나 따듯한 말 한마디를 들었던 순간",
                        part: ["F"]
                    },
                    {
                        answer: "내가 열심히 노력한 결과가 드러났던 순간",
                        part: ["T"]
                    },
                ]
            },
            {
                q: "한 해를 돌아보며 내가 중요하게 생각한 것은?",
                a: [
                    {
                        answer: "주변 사람들과의 관계와 조화",
                        part: ["F"]
                    },
                    {
                        answer: "효율성과 논리적인 결과물",
                        part: ["T"]
                    },
                ]
            },
            {
                q: "올해 예상치 못한 일이 생겼을 때 나의 대처는?",
                a: [
                    {
                        answer: "유연하게 받아들이고 상황에 따라 움직였다.",
                        part: ["P"]
                    },
                    {
                        answer: "계획에 맞게 조정하고 문제를 해결하려고 했다.",
                        part: ["J"]
                    },
                ]
            },
        ],
        result: [],
    },
    {
        idx: "planet-test",
        title: "행성 테스트",
        qnaList: [
            {
                q: "당신을 더 반짝이게 하는 순간은 언제인가요?",
                a: [
                    {
                        answer: "a) 사람들과 함께 시간을 보낼 때",
                        part: ["E"]
                    },
                    {
                        answer: "b) 혼자만의 시간을 보낼 때",
                        part: ["I"]
                    }
                ]
            },
            {
                q: "당신은 어떤 장소가 더 끌리나요?",
                a: [
                    {
                        answer: "a) 지나가다 우연히 가게 된 숨은 맛집",
                        part: ["P"]
                    },
                    {
                        answer: "b) 미리 예약해서 완벽하게 세팅된 레스토랑",
                        part: ["J"]
                    },
                ]
            },
            {
                q: "잠들기 전, 당신을 더 기분 좋게 만드는 생각은?",
                a: [
                    {
                        answer: "a) 머릿 속에 펼쳐지는 상상의 세계",
                        part: ["N"]
                    },
                    {
                        answer: "b) 만족스럽게 보낸 오늘 하루",
                        part: ["S"]
                    },
                ]
            },
            {
                q: "당신을 더 설레게 하는 상황은 무엇인가요?",
                a: [
                    {
                        answer: "낯선 곳에서의 즐거운 경험들이 쌓일 때",
                        part: ["P"]
                    },
                    {
                        answer: "계획한대로 모든 일들이 맞아 떨어질 때",
                        part: ["J"]
                    },
                ]
            },
            {
                q: "당신을 더 기분좋게 만드는 칭찬은?",
                a: [
                    {
                        answer: "네 덕분에 금방 해결됐어",
                        part: ["T"]
                    },
                    {
                        answer: "넌 정말 따뜻한 사람이야",
                        part: ["F"]
                    },
                ]
            },
        ],
        result: [],
    }
];

let result = [];

const getResult = part => {
    return {
        type: "GET",
        part,
    };
};

const resetResult = () => {
    return {
        type: "RESET",
    };
}

const reducer = (state={json, result}, action) => {
    switch(action.type) {
        case "GET":
            return {
                json,
                result: [...state.result, action.part]
            };
        // wip : test-page 내 뒤로가기 버튼 누를 때!
        case "BACK":
            return {
                json,
                result
            };
        case "RESET":
            return {
                json,
                result: []
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators = {
    getResult,
    resetResult
};

export default store;
