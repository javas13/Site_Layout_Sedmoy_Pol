new Swiper('.text-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    el: '.swiper-pagination',
    clickable:true,
  },
  loop: true,
});
function CatalogHoverOn(){
  document.getElementById("catalog_sect_id").classList.add("catalog_sect_active");
  let btn = document.querySelector('.catalog_btn');
  btn.classList.add("catalog_btn_hov");
}
function CatalogHoverOut(){
  document.getElementById("catalog_sect_id").classList.remove("catalog_sect_active");
  let btn = document.querySelector('.catalog_btn');
  btn.classList.remove('catalog_btn_hov');
}
