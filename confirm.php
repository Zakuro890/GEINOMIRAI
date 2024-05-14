<?php 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"]; 
  } else { 
    header("Location: contact.php"); 
  } 
?>
<html>
  <head>
    <title>お問い合わせフォーム - 確認画面</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">お問い合わせフォーム - 確認画面</h1>
      <p class="mb-4">以下の内容で送信します。よろしいですか？</p>
      <div class="bg-white rounded-lg shadow-md p-4">
        <table class="w-full">
          <tr>
            <td class="font-semibold w-1/4">名前：</td>
            <td><?php echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8'); ?></td>
          </tr>
          <tr>
            <td class="font-semibold">メールアドレス：</td>
            <td><?php echo htmlspecialchars($email, ENT_QUOTES, 'UTF-8'); ?></td>
          </tr>
          <tr>
            <td class="font-semibold">お問い合わせ内容：</td>
            <td><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></td>
          </tr>
        </table>
      </div>
      <form class="mt-4" method="post" action="send.php">
        <input type="hidden" name="name" value="<?php echo $name; ?>">
        <input type="hidden" name="email" value="<?php echo $email; ?>">
        <input type="hidden" name="message" value="<?php echo $message; ?>">
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">送信</button>
        <button type="button" onclick="history.back()" class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-2">戻る</button>
      </form>
    </div>
  </body>
</html>
