// String

// indexOf()메서드
// 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
// 일치하는 값이 없으면 -1을 반환
// Demmo
const paragraph = 'hello heresey'
const serchTerm = 'heresey'
const indexOfFirst = paragraph.indexOf(serchTerm)
console.log(indexOfFirst);

// slice()메서드
// 문자열의 일부를 추출하면서 새로운 문자열을 변환
// 매개변수
// begin.Index 추출 시작점 0 / endIndex 추출 종료점 인데스로 그 직전까지 추출
console.log(paragraph.slice(0, 3));

// replace()메서드
// 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
// 패턴은 문자열이나 정규식이 될 수 있으며, 교체 문자열은 문자열이나 모든 매치에
// 대해서 호출된 함수일수도 있다
console.log(paragraph.replace('heresey', 'geta'))
console.log(paragraph.replace('hello ', ''));

// trim()메서드
// 문자열 양 끝의 공백을 제거합니다. 공백이란 모든 공백문자(space, tab NBSP 등)
// 모든 개행문자(LF, CR 등)을 의미
const str = '     upparadoxx     '
console.log(str);
console.log(str.trim());
