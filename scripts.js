<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  $(document).ready(function () {
    $("#login-button").click(function (event) {
      event.preventDefault();

      // Ambil nilai dari input
      const username = $("#username").val();
      const password = $("#password").val();

      // Validasi sederhana (bisa disesuaikan atau hubungkan ke backend/Firebase)
      if (username === "admin" && password === "1234") {
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        $(".success-message").fadeIn(1000);
      } else {
        $(".error-message").text("Username atau Password salah!").fadeIn().delay(2000).fadeOut();
      }
    });
  });
</script>
