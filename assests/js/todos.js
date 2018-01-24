/*alert("connected")*/

//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("toDoChecked");
});

//click on X to delete todo
$("ul").on("click", "span", function(){
	/*console.log("clicked on a span");*/
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//event listner for adding a new todo
$("input[type='text']").keypress(function(event){
	/*console.log("key pressed");*/
	if(event.which === 13) {
		var toDoText = ($(this).val());
		$(this).val("");
		$("ul").append('<li><span><i class="fa fa-trash"></i></span> '+toDoText+'</li>');
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})