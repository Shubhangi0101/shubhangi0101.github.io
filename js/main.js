// $(".portfolio-link").on("shown.bs.modal", function()  {
//     var urlReplace = "#" + $(this).attr('id');
//     history.pushState(null, null, urlReplace);
//   });
//
//   // This code gets executed when the back button is clicked, hide any/open modals.
//   $(window).on('popstate', function() {
// console.log("Yeah baby");
//     $(".portfolio-link").modal('hide');
//   });
// $('.portfolio-link').on('show.bs.modal', function(e) {
//        window.location.hash = "modal";
//    });
//
//    $(window).on('hashchange', function (event) {
//        if(window.location.hash != "#modal") {
//            $('.portfolio-link').modal('hide');
//        }
//    });
$('#portfolioModal1').on('show.bs.modal', function(e) {
       window.location.hash = "modal";
   console.log(window.location.href);
   });

   $(window).on('hashchange', function (event) {
   console.log("Yo");
   console.log(window.location.href);
       if(window.location.hash != "#modal") {
           $('#portfolioModal1').modal('hide');
       }
   });

   $('#portfolioModal2').on('show.bs.modal', function(e) {
          window.location.hash = "modal";
      console.log(window.location.href);
      });

      $(window).on('hashchange', function (event) {
      console.log("Yo");
      console.log(window.location.href);
          if(window.location.hash != "#modal") {
              $('#portfolioModal2').modal('hide');
          }
      });

      $('#portfolioModal3').on('show.bs.modal', function(e) {
             window.location.hash = "modal";
         console.log(window.location.href);
         });

         $(window).on('hashchange', function (event) {
         console.log("Yo");
         console.log(window.location.href);
             if(window.location.hash != "#modal") {
                 $('#portfolioModal3').modal('hide');
             }
         });

         $('#portfolioModal4').on('show.bs.modal', function(e) {
                window.location.hash = "modal";
            console.log(window.location.href);
            });

            $(window).on('hashchange', function (event) {
            console.log("Yo");
            console.log(window.location.href);
                if(window.location.hash != "#modal") {
                    $('#portfolioModal4').modal('hide');
                }
            });

            $('#portfolioModal5').on('show.bs.modal', function(e) {
                   window.location.hash = "modal";
               console.log(window.location.href);
               });

               $(window).on('hashchange', function (event) {
               console.log("Yo");
               console.log(window.location.href);
                   if(window.location.hash != "#modal") {
                       $('#portfolioModal5').modal('hide');
                   }
               });
