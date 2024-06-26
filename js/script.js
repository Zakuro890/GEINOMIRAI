// ハンバーガーメニューをクリックした際の処理
$(function() {
  $('#menubar_hdr').click(function() {
      $(this).toggleClass('ham');

      if ($(this).hasClass('ham')) {
          $('#menubar').addClass('d-b');
          $('body').css('overflow', 'hidden'); // Disable scrolling
      } else {
          $('#menubar').removeClass('d-b');
          $('body').css('overflow', 'auto'); // Enable scrolling
      }

  });
});

// 同一ページへのリンクの場合に開閉メニューを閉じる処理
$(function() {
  $('#menubar a[href^="#"]').click(function() {
      $('#menubar').removeClass('d-b');
      $('#menubar').removeClass('ham');
      $('body').css('overflow', 'auto'); // Enable scrolling
  });
});


// 汎用開閉処理
$(function() {
  $('.openclose').next().hide();
  $('.openclose').click(function() {
      $(this).next().slideToggle();
      $('.openclose').not(this).next().slideUp();
  });
});


//桜エフェクト
particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":30,//この数値を変更すると桜の数が増減できる
      "density":{
        "enable":true,
        "value_area":1121.6780303333778
      }
    },
    "color":{
      "value":"#fff"
    },
    "shape":{
      "type":"image",//形状は画像を指定
      "stroke":{
        "width":0,
      },
      "image":{
        "src":"http://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/move02/5-6/img/flower.png",//画像を指定
        "width":120,
        "height":120
      }
    },
    "opacity":{
      "value":0.06409588744762158,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":8.011985930952697,
      "random":true,//サイズをランダムに
      "anim":{
        "enable":false,
        "speed":4,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
    },
    "move":{
      "enable":true,
      "speed":7,//この数値を小さくするとゆっくりな動きになる
      "direction":"bottom-right",//右下に向かって落ちる
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":281.9177489524316,
        "rotateY":127.670995809726
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
      },
      "onclick":{
        "enable":false,
      },
      "resize":true
    }
  },
  "retina_detect":false
});


$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();
          // それぞれのcentering_itemクラスに対して…
          $("centering_item").each(function () {
              // それぞれのcentering_itemクラスのウィンドウからの高さを取得
              const bPosition = $(this).offset().top;
              // スクロールした量が要素の高さを上回ったら
              // その数値にウィンドウの高さを引き、最後に200pxを足す
          if (wScroll > bPosition - wHeight + 200) {
              $(this).addClass("fadeIn");
          }
      });
  });
});