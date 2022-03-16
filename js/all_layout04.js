$(function(){
/////////////////////////////////
// $('선택').on('이벤트', 할일)
// 일 => funcktion() {}

// $(this) 나
// $(thsi)index() 번호

function 팝업창끄기() {
    $(this).parent().hide();
    console.log($(this).parent().index())
    }

$('.popUp button').on('click', 팝업창끄기);




///////////////////////////////////
})