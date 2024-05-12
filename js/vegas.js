//画像と動画の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の動画と画像
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_01.jpg',//動画が再生されなかった場合の代替画像
				 video:{
					 src: [//mp4で動画が再生されない時のことを考えて複数の形式の動画を設定
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.mp4',
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.webm',
						 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/video/movie.ogv'
					 ],
					 loop: false,//動画を繰り返さない
					 mute: true,//動画の音を鳴らさない
				 }
				},
				{src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_02.jpg'},
				{src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_03.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_01.jpg' },
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_02.jpg' },
				{ src: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-5/img/img_sp_03.jpg' }
			];
}

//Vegas全体の設定
$('#slider').vegas({
    overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
    transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 5000,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
  });

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
    var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

