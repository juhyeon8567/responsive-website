// 와이드 pc 메뉴 슬라이드
$(document).ready(function(){
    $(".menu_gnb>li").mouseover(function(){
        $(".sub_menu").fadeIn("nomal");
    }),
    $(".menu_gnb>li").mouseout(function(){
        $(".sub_menu").fadeOut("fast");
    });
});



// ---------중형 태블릿 햄버거 메뉴 슬라이드------------
// $(document).ready(function(){
//     $(".m_nav_icon").toggle(function(){
//         $("#gnb").slideDown('slow');
//     }, function(){
//         $("#gnb").slideUp('fast');
//     });
// });