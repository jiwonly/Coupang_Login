window.onload = function () {
  // window.onload : 페이지가 완전히 로드되었을 때 실행되는 함수
  const pw_show_hide = document.querySelector(".pw_show_hide");
  const input_id = document.querySelector("input[type=text]");
  const input_pw = document.querySelector("input[type=password]");
  const id_error = document.querySelector(".id_error");
  const pw_error = document.querySelector(".pw_error");
  // querySelector : 괄호 속에 제공한 선택자와 일치하는 문서 내 첫번째 요소 반환

  input_id.addEventListener("click", function () {
    // 아이디 입력 필드를 클릭했을 때
    // addEventListener : 이벤트를 등록하는 방식
    id_error.style.display = "block";
    // 오류 메시지 보여줌
  });

  input_pw.addEventListener("click", function () {
    // 비밀번호 입력 필드를 클릭했을 때
    pw_error.style.display = "block";
    // 오류 메시지 보여줌
  });

  let i = true; // 비밀번호 보임/숨김 상태 관리하는 변수
  pw_show_hide.addEventListener("click", function () {
    // 버튼 클릭했을 때
    if (i == true) {
      // 비밀번호 숨김 상태이면
      pw_show_hide.style.backgroundPosition = "-126px 0";
      i = false; // 보이게 변경
    } else {
      // 비밀번호 보이는 상태이면
      pw_show_hide.style.backgroundPosition = "-105px 0";
      i = true; // 안 보이게 변경
    }
  });
}; // onload end
