var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter-box").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(Math.ceil(this.countNum).toLocaleString("en") + "+");
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en") + "+");
            //alert('finished');
          },
        }
      );
    });
    $(".counter-3").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(Math.ceil(this.countNum).toLocaleString("en") + "k+");
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en") + "k+");
            //alert('finished');
          },
        }
      );
    });
    $(".counter-4").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            //$this.text(Math.ceil(this.countNum));
           $this.text('1.' + Math.ceil(this.countNum).toLocaleString("en") + "Mn+");
          },
          complete: function () {
            $this.text('1.' + Math.ceil(this.countNum).toLocaleString("en") + "Mn+");
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

