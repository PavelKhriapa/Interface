$( document ).ready(function() {
    if (screen.width > 768) {
    var tempHeight = $( ".main-page .content-left" ).height();
    var tempHeight2 =  $( ".main-page .content-right .last-transactions .sub-title" ).height();
    var tempWidth = $( ".main-page .content-right .last-transactions-item" ).width();
    var tempWidth2 = $( ".transaction-page .last-transactions-item" ).width();
    $( ".main-page .content-right" ).height(tempHeight);
    $( ".main-page .content-right .last-transactions" ).height(tempHeight-30);
    $( ".main-page .content-right .last-transactions-row" ).height(tempHeight - 50 - tempHeight2 );
    $( ".main-page .content-right .darkbg" ).width(tempWidth+10);
    $( ".transaction-page .last-transactions .darkbg" ).width(tempWidth2+10);
    $( window ).resize(function() {
    var tempHeight = $( ".main-page .content-left" ).height();
    var tempWidth = $( ".main-page .content-right .last-transactions-item" ).width();
    var tempWidth2 = $( ".transaction-page .last-transactions-item" ).width();
    var tempHeight2 =  $( ".main-page .content-right .last-transactions .sub-title" ).height();
    $( ".main-page .content-right" ).height(tempHeight);
    $( ".main-page .content-right .last-transactions" ).height(tempHeight-30);
    $( ".main-page .content-right .last-transactions-row" ).height(tempHeight - 50 - tempHeight2 );
    $( ".main-page .content-right .darkbg" ).width(tempWidth+10);
    $( ".transaction-page .last-transactions .darkbg" ).width(tempWidth2+10);
    });
    }

// Таб меню на странице
  $(".card-info-tabs li").on("click", function() {
    $(".card-info-tabs li").removeClass("active-tab");
    $(this).addClass('active-tab');
    var dataValue = $(this).attr("data-val");
    if(dataValue == 1){
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=1]").addClass("active-tab-content");
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=1]").addClass("active-tab-content");
    }
    if(dataValue == 2){
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=2]").addClass("active-tab-content");
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=2]").addClass("active-tab-content");
    }
    if(dataValue == 3){
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=3]").addClass("active-tab-content");
      $("div[data-val]").removeClass("active-tab-content");
      $("div[data-val=3]").addClass("active-tab-content");
    }
  });
  $(".popup-open").on("click", function() {
    // $(".popup").addClass("display-popup");
    $(".popup").slideDown();
    $(".opacity-bg").addClass("active");
    console.log("hi");
  });
  $(".opacity-bg").on("click", function() {
    $(".popup").slideUp();
    // $(".popup").removeClass("display-popup");
    $(".opacity-bg").removeClass("active");
    console.log("hi");
  });
// Switch
  $(".light-switch img[mod=light]").on("click", function() {
    $("body").removeClass('darkmode');
    $("body").addClass('lightmode');
  });
  $(".light-switch img[mod=dark]").on("click", function() {
    $("body").removeClass('lightmode');
    $("body").addClass('darkmode');
  });
  $(".switch").on("click", function() {
    if ($("body").hasClass('lightmode')) {
      $("body").removeClass('lightmode');
      $("body").addClass('darkmode');
      return true;
    }
    if ($("body").hasClass('darkmode')) {
      $("body").removeClass('darkmode');
      $("body").addClass('lightmode');
      return true;
    }
  });
  $(".new-pass img").on("click", function() {
    $(this).toggleClass('show-pass');
    if ($(this).hasClass('show-pass')){
      $('.new-pass input').prop('type', 'text');
    } else {
      $('.new-pass input').prop('type', 'password');
    }
  });

  if($("#select-1").length){
    const select1 = new CustomSelect('#select-1');
  }
  if($("#select-2").length){
    const select2 = new CustomSelect('#select-2');
  }
  if($("#select-3").length){
    const select3 = new CustomSelect('#select-3');
  }
  if($("#select-4").length){
    const select4 = new CustomSelect('#select-4');
  }
});

