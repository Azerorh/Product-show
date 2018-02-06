var count=1;

$(document).ready(function() {
    $("#tabs").on("click", ".tab", function(){
    	$("#tabs .tab").removeClass("active"); //удаляем класс во всех вкладках
    	$(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
});

$(document).ready(function() {
	$("#count").html(count);
});

$(document).ready(function() {
	$(".quantity").on("click",".minus", function(){
		if(count>1)
		$("#count").html(--count);
	})
});

$(document).ready(function() {
	$(".quantity").on("click",".plus", function(){
		if(count<10)
		$("#count").html(++count);
	})
});