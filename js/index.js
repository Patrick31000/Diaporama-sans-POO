  $(document).ready(function() {


      $.getJSON('Json.json', function(images) {
          console.log($.getJSON('Json.json'));
          $.each(images, function() {
              var content = document.getElementsByClassName('orbit-next');

              console.log(content);
              for (i = 0; i < 5; i++) {
                  $(".orbit-next").after("<li class='orbit-slide'><img class='orbit-image' src='" + this[i].url + "'></li>");
                  //  $("img").attr("src", this[i].url);
                  //  $("img").attr("alt", this[i].name); console.log(this[i].url); console.log(this[i].name)
              }
          });
      });













  });