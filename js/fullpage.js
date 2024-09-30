$(function (){
    $('#fullpage').fullpage({
        autoScrolling: true,
        slidesNavigation: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        // scrollingSpeed: 1200,
        fixedElements: '#header',
        responsiveWidth: 375,
        afterLoad: function(anchorLink, index) {
            // 모든 섹션에서 클래스 제거
            // $('.section').removeClass('active-section');
        
            // 현재 섹션에 클래스 추가
            $(this).addClass('active-section');
        }
    });
})