borro = false

jQuery(document).ready(function() {
		
		$("button").click(function(){
		
			if(borro){
				$("#display").text("");
				borro = false
			}
				
			switch($(this).text()){
				
				case ("C"):
					$("#display").text("");
					break;
				case ("+/-"):
					if($("#display").text()[0]=="-"){
						$("#display").text($("#display").text().substr(1));	//eliminamos primer caracter
					}else{
						$("#display").text("-"+$("#display").text());
					}
					break;
				case ("="):
					$("#display").text(eval($("#display").text()));
					borro = true
					break;
				default:
					$("#display").text($("#display").text() + $(this).text());
			}
		});
	
	
	
	
	})

