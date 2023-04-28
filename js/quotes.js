const quotes = [
    {
        quote: '성공은 우연이 아니다. 노력, 인내, 배움, 공부, 희생, 그리고 무엇보다 자신이 하고 있는 일에 대한 사랑, 하는 법을 배우는 것이다.',
        author: '펠레'
    },
    {
        quote: '많은 실패자들은 포기하기 때문에 성공이 얼마나 가까웠는지 깨닫지 못합니다.',
        author: '토마스 에디슨'
    },
    {
        quote: '미루는 것은 쉬운 일을 어렵게 만들고 어려운 일을 더 어렵게 만든다.',
        author: '메이슨 쿨리'
    },
    {
        quote: '노력을 대신할 수 있는 것은 없습니다.',
        author: '토마스 에디슨'
    },
    {
        quote: '더 이상 상황을 바꿀 수 없을 때 우리는 스스로를 변화시켜야 합니다.',
        author: '빅터 프랭클'
    },
    {
        quote: '진짜 어려움은 극복할 수 있습니다. 정복할 수 없는 것은 상상 속의 것들뿐이다.',
        author: '시어도어 N. 베일'
    },
    {
        quote: '성적이나 결과는 행동이 아니라 습관입니다.',
        author: '아리스토텔레스'
    },
    {
        quote: '더 많이 읽을수록 더 많은 것을 알게 될 것이고 더 많이 배울수록 더 많은 곳을 가게 될 것입니다.',
        author: '닥터 수스'
    },
    {
        quote: '성공으로 가는 엘리베이터는 없습니다. 성공은 계단을 통해서만 도달할 수 있습니다.',
        author: '지그 지글러'
    },
    {
        quote: '네 내면에서 ‘그림을 그릴 수 없다’는 소리가 들리면 반드시 그림을 그리십시오. 그러면 그 목소리는 잠잠해질 것입니다.',
        author: '빈센트 반 고흐'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;