// js구문 여기에 넣기
function myF(){
    const demo = document.querySelector('.demo')
    // document.getElementById('demo').innerHTML='hello javascript!
     demo.innerHTML='Hello javascript'
     demo.style.color='red'
     demo.style.fontSize='30px'
     demo.style.backgroundColor='yellow'
     demo.style.transform='translate(100px, 100px) rotate(45deg) scale(1.5)'
}

// 변수
// 변수란 데이터를 저장하는 공간
// 변수 선언(let. const, var)
let a = 20
a=10
console.log(a)

const b = 30

console.log(b)

// 데이터 타입
// 숫자
let num1 = 1
let num2 = 2
console.log(num1+num2) 

// 문자열(string)
let str1= '1'
let str2= '2'
console.log(str1+str2)

// 불린(boolean)
const isTrue=true
const isFalse=false
console.log(isTrue, isFalse)

// object 객체
const user={
    name: "김가을",
    age: 2,

}
console.log(user)

const post={
    img:'https://cafe24img.poxo.com/sleepnsleepmall/web/product/big/202406/1ca73ccea595d12dd2cea04f8720518b.jpg',
    title:'목의 결림이 싹~! 깊은잠베개 50%',
}
console.log(post)
console.log(post.img)
console.log(post.title)

// 배열(array)
// 순서가 있는 리스트 key값 없음
const arr =[1,2,3,4,5]
console.log(arr)
console.log(arr[0])

// const users=[
//     {name:홍길동, age:20},
//     {name:홍길동, age:20},
//     {name:홍길동, age:20},
// ]
// console.log(users[1])
// console.log('${users[1].name}님 안녕하세요.')

// 함수
// 기명 함수
// 중괄호 사이에 실행 원하는 액션을 넣음
function 함수이름() {}
함수이름()
// 익명 함수
const fun1= function() {
    console.log('fun1')
}
// 화살표함수
const fun2=()=>{
    console.log('fun2')
}
fun2()

// if문

const aa = 5

// if(조건) {조건이 참일 때 실행되는 코드}
if(aa === 1) {
    console.log(
        // 조건이 참일 때 실행되는 코드
        'aa는 1입니다.')
}else if(aa===2) {
    console.log('aa가 2입니다.')


}else {
    // 조건이 거짓일때 실행되는 코드
    console.log('aa는 1이 아닙니다.')
}

// if else문

// slide
let current = 0

// console.log(lstSlide)
// lstSlide.style.border = '1px solid purple'
const lstSlide = document.querySelector('.slide ul')
const slideCount= document.querySelectorAll('.slide li').length
console.log(slideCount) //3
// 3초마다 슬라이드가 넘어가도록
// setInterval(함수, 시간)
setInterval(function() {
    slide() //슬라이드 함수 호출
}, 3000)
// 슬라이드 함수 정의
current{}

fuction slide() {
    current = (current+1) %slideCount
    lstStyle.style.left = current*-100+%
}
