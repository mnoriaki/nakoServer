$(document).ready(function(){
      const wsProtocol = location.protocol === "http:" ? "ws://" : "wss://";
      var s = location.host.split(':')
      const address = wsProtocol + s[0] + ":5001/";

 	//var ws = new WebSocket("ws://127.0.0.1:5001/");
 	var ws = new WebSocket(address);
 	
 	ws.onmessage = function (event) {
 				$('#mainchat').html($('#mainchat').html() + 
 				'<div class="name">' + thisName + '</div>' +
    			'<div class="fukidasi left">' +
    			'<img class="icon" src="icon.png" alt="">' + event.data + '</div>');
	    		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
            };
 	
 	$('#command').keypress(function (e) {
	  if (e.which == 13) {
	  	if ($('#command').val() == '') {
	  		return false;
	  	}
	  	
	  	ws.send($('#command').val())
	  	
	    $('#mainchat').html($('#mainchat').html() + '<div class="fukidasi right">' + $('#command').val() + '</div>');
	    $('#command').val('');
	    
	    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
  
	    return false;
	  }
	});
});
