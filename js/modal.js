// 모달 열기, 닫기
function modalOpen(modalEl){
    const body = document.body;
    const allModal = document.querySelectorAll('.modal-cont');
    const modalBg = document.querySelector('.modal-bg');
    const modalCont = document.querySelector('.' + modalEl);

    allModal.forEach(modal => {
        modal.classList.remove('active');
    });
    if (!modalBg.classList.contains('active')) {
        modalBg.classList.add('active');
    }
    modalCont.classList.add('active');
    body.classList.add('no-scroll');
}
function modalClose(){
    const body = document.body;
    const allModal = document.querySelectorAll('.modal-cont');
    const modalBg = document.querySelector('.modal-bg');

    allModal.forEach(modal => {
        modal.classList.remove('active');
    });
    if (modalBg.classList.contains('active')) {
        modalBg.classList.remove('active');
    }
    body.classList.remove('no-scroll');
}