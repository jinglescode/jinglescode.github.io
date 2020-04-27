(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


//
// document.addEventListener('DOMContentLoaded', function() {
//    var elems = document.querySelectorAll('.materialboxed');
//    var instances = M.Materialbox.init(elems, {});
//  });

 // Or with jQuery

 $(document).ready(function(){
   $('.materialboxed').materialbox();
   $('.modal').modal();
 });
