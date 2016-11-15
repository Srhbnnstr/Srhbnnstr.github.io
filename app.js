
  $(function(){
  $("#a").click(function(e){
    e.preventDefault();
    $('html,body').animate(this.hash,this.hash);
  });
