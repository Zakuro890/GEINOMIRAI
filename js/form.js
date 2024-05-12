$(document).ready(function() {
  $("form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: {
        required: "お名前を入力してください。",
        minlength: "お名前は2文字以上で入力してください。"
      },
      email: {
        required: "メールアドレスを入力してください。",
        email: "有効なメールアドレスを入力してください。"
      },
      message: {
        required: "お問い合わせ内容を入力してください。",
        minlength: "お問い合わせ内容は5文字以上で入力してください。"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
