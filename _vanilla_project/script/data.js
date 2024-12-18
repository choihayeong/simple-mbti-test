/*

estj : 핑크
estp : 베이지
esfj : 라일락
esfp : 그레이
entj : 블루
entp : 라임
enfj : 화이트
enfp : 옐로
istj : 블랙
istp : 오렌지
isfj : 라벤더
isfp : 카키
intj : 퍼플
intp : 레몬
infj : 아쿠아
infp : 그린

*/

const qnaList = [
    {
        q: "1. 사람이 없는 세포라에서 화장품을 보고 있었는데 갑자기 점원이 와서 필요한 게 있냐고 말을 건다",
        a: [
            {
                answer: "a) 없다고 하고 다시 둘러본다",
                type: ["E"]
            },
            {
                answer: "b) 또 말걸 거 같아서 자연스럽게 나온다",
                type: ["I"]
            },
        ]
    },
    {
        q: "2. 가을이라 멍 때리기 대회가 많이 열리는 요즘 만약 내가 나간다면?",
        a: [
            {
                answer: "a) 아무 생각 없이 멍 때리기 ㄱㄱ",
                type: ["S"]
            },
            {
                answer: "b) 난 생각이 많아서 ㄴㄴ",
                type: ["N"]
            },
        ]
    },
    {
        q: "3. 눈/비가 아주 많이 오는 날 눈/비를 맞고 가는 사람을 우연히 볼 때 나는...",
        a: [
            {
                answer: "a) 불쌍하고 안타깝게 생각함",
                type: ["S", "F"]
            },
            {
                answer: "b) 왜 우산을 안 갖고 나왔을까 생각함",
                type: ["N", "T"]
            },
        ]
    },
    {
        q: "4. 사고 싶은 물건이 있어서 사러 가는 길, 어제부터 가고 싶었던 코인노래방이 눈앞에 있다.",
        a: [
            {
                answer: "a) 진짜 가고 싶었던 코노부터 간다!",
                type: ["P"]
            },
            {
                answer: "b) 물건 사러 가던 길이였으니 거기부터 간다!",
                type: ["J"]
            },
        ]
    },
    {
        q: "5. 집에 가고 있는데 쓰레기통에 완전 싱싱한 꽃이 묶여있는 꽃다발이 버려져있다.",
        a: [
            {
                answer: "a) 누가 꽃을 저렇게 버려놨나",
                type: ["S"]
            },
            {
                answer: "b) 얼마 안 된 꽃다발 같은데 왜 버렸지? 사연이 궁금해진다.",
                type: ["N"]
            },
        ]
    },
    {
        q: "6. 맛집 줄을 기다리고 있는데 앞사람들이 말은 건다.",
        a: [
            {
                answer: "a) 스몰 톡 굳! 계속 얘기한다.",
                type: ["E"]
            },
            {
                answer: "b) 초큼... 불편쓰... ㅎ... 적당히 끊어낸다.",
                type: ["I"]
            },
        ]
    },
    {
        q: "7. 내 방에 잘 자라고 있던 식물이 너무 정신 없이 바쁜 일정으로 신경을 못 써줘서 시들었을 때",
        a: [
            {
                answer: "a) 식물에게 미안하다.",
                type: ["F"]
            },
            {
                answer: "b) 역시... 바쁠 땐 식물 키우면 안 되겠다.",
                type: ["T", "J"]
            },
        ]
    },
    {
        q: "8. 유명한 빵집에 줄 서서 들어갔는데 딱히 먹고 싶은 빵이 없다.",
        a: [
            {
                answer: "a) 기다린 게 아까우니 뭐라도 사야겠다.",
                type: ["P"]
            },
            {
                answer: "b) 먹고 싶은 빵이 없어서 안 사고 나온다.",
                type: ["T", "J"]
            },
        ]
    },
    {
        q: "9. 저녁에 친구와 같이 운동하기로 했는데 친구가 지쳤다고 그냥 놀자고 한다.",
        a: [
            {
                answer: "a) 그래, 운동은 다음에 하면 됨",
                type: ["F", "P"]
            },
            {
                answer: "b) 운동하자 해서 준비 다하고 왔는데...?",
                type: ["T", "J"]
            },
        ]
    },
    {
        q: "10. 병원에 입원했는데 옆 침대에 나와 비슷한 또래가 있다.",
        a: [
            {
                answer: "a) 바로 옆이니까 말 걸고 친해진다.",
                type: ["E"]
            },
            {
                answer: "b) 굳이 안 친해져도 된다.",
                type: ["I"]
            },
        ]
    },
    {
        q: "10. 안 친한 친구가 새 향수를 샀다고 자랑하는데 내가 너무 싫어하는 향이다.",
        a: [
            {
                answer: "a) 그냥 대충 좋다고 해준다.",
                type: ["F"]
            },
            {
                answer: "b) 별로 내가 좋아하는 향은 아니네, 바로 말한다.",
                type: ["T"]
            },
        ]
    },
    {
        q: "11. 회사에 매일 같은 옷을 입고 오는 사람이 있다.",
        a: [
            {
                answer: "a) 오늘도 저거 입었군",
                type: ["S"]
            },
            {
                answer: "b) 왜 맨날 같은 걸 입지? 같은 옷을 여러 개 산 건가?",
                type: ["N"]
            },
        ]
    }
];

const infoList = [
    {
        name: "estj",
        imgSrc: "",
        desc: "인생키워드 : 핑크"
    },
    {
        name: "estp",
        imgSrc: "",
        desc: "인생키워드 : 베이지"
    },
    {
        name: "esfj",
        imgSrc: "",
        desc: "인생키워드 : 라일락"
    },
    {
        name: "esfp",
        imgSrc: "",
        desc: "인생키워드 : 그레이"
    },
    {
        name: "entj",
        imgSrc: "",
        desc: "인생키워드 : 블루"
    },
    {
        name: "entp",
        imgSrc: "",
        desc: "인생키워드 : 라임"
    },
    {
        name: "enfj",
        imgSrc: "",
        desc: "인생키워드 : 화이트"
    },
    {
        name: "enfp",
        imgSrc: "",
        desc: "인생키워드 : 옐로"
    },
    {
        name: "enfp",
        imgSrc: "",
        desc: "인생키워드 : 옐로"
    },
    {
        name: "istj",
        imgSrc: "",
        desc: "인생키워드 : 블랙"
    },
    {
        name: "istp",
        imgSrc: "",
        desc: "인생키워드 : 오렌지"
    },
    {
        name: "isfj",
        imgSrc: "",
        desc: "인생키워드 : 라벤더"
    },
    {
        name: "isfp",
        imgSrc: "",
        desc: "인생키워드 : 카키"
    },
    {
        name: "intj",
        imgSrc: "",
        desc: "인생키워드 : 퍼플"
    },
    {
        name: "intp",
        imgSrc: "",
        desc: "인생키워드 : 레몬"
    },
    {
        name: "infj",
        imgSrc: "",
        desc: "인생키워드 : 아쿠아"
    },
    {
        name: "infp",
        imgSrc: "",
        desc: "인생키워드 : 그린"
    },
];
