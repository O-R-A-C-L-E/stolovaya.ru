// select box start

const selectBox = document.querySelector(".header-select-wrapper");
if (selectBox !== undefined) {
    selectBox.addEventListener('click', function () {
        this.querySelector('.header-select').classList.toggle('open');

        for (const option of document.querySelectorAll(".header-select-option")) {
            option.addEventListener('click', function () {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.header-select-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.header-select').querySelector('.header-select-trigger span').textContent = this.textContent;
                }
            })
        }
    })
}

window.addEventListener('click', function (e) {
    const select = document.querySelector('.header-select')

    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }

});

//select box end

//catalog scroll start
$(function () {
    $(".catalog-list").mousewheel(function (event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });

//catalog scroll end

//modal start

    const modalBg = $(".modal-container");
    const contactNumber = $("#contacts__number");
    const contactForm = $(".modal__contact-form__container")
    const categoriesDropDownMenu = $(".modal__drop-down-menu");

    contactNumber.on("click", function (e) {
        contactForm.removeClass("active")
        categoriesDropDownMenu.removeClass("active")
        if (!modalBg[0].classList.contains("active")){
            modalBg.toggleClass("active");
            handleModalForElement(e);
        } else {
            modalBg.removeClass("active");
        }
    });


    $("*[data-categoryslag]").on("click", function (e){
        contactForm.removeClass("active")
        categoriesDropDownMenu.removeClass("active")
        if (!modalBg[0].classList.contains("active")){
            modalBg.addClass("active");
            handleModalForElement(e);
        }else {
            modalBg.removeClass("active");
        }
    })


    const handleModalForElement = (e) =>{
        const catalogItems = $(e.target.closest("[data-categoryslag]"))
        if (contactNumber[0].contains(e.target)) {
            modalBg.css({"top": "3rem", "z-index": "99"})
            $(e.target.closest(".header-menu-item")).toggleClass("header-menu-item-active");
            contactForm.addClass("active")

        } else if (catalogItems[0].contains(e.target)) {
            modalBg.css({"top": "13.25rem", "z-index": "8"});
            categoriesDropDownMenu.addClass("active");
        }
    }

    $(window).on("click", function (e){
        if (modalBg[0].contains(e.target) && !categoriesDropDownMenu[0].contains(e.target) && !contactForm[0].contains(e.target)){
            modalBg.removeClass("active");
        }
    })
//modal end
});

