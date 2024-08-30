
     // top to back
     var btn = $('#button');
      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

      $('document').ready(function(){
        $('button.navbar-toggle').click(function(){
          var navbar_obj = $($(this).data("target"));
          navbar_obj.toggleClass("open");
        });
      });


      // navbar

      $(function(){
        // mobile menu slide from the left
        $('[data-toggle="slide-collapse"]').on('click', function() {
          $navMenuCont = $($(this).data('target'));
          $navMenuCont.animate({'width':'toggle'}, 280);


        });
      })

      // counter
      const counters = document.querySelectorAll('.counter');
        const speed = 500; // The lower the slower

        counters.forEach(counter => {
          const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // console.log(inc);
            // console.log(count);

            // Check if target is reached
            if (count < target) {
              // Add inc to count and output in counter
              counter.innerText = count + inc;
              // Call function every ms
              setTimeout(updateCount, 1);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });