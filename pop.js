$(document).ready(function(){
	$("#findBooks").click(search);
})


var search = function(){

	var keyword = $("#keyword").val();

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + keyword,
		method: 'GET'
	}).done(render);
}

var render = function(response){
	var results = $('#results');

	results.empty();
	//clear the wrapper

	//for every object in the response data array
	for(var i = 0; i < response.items.length; i++){

		//what to put if there are NO books?

		//  -create a new image tag 
		var dive = $('<div>');

		var url = response.items[i].volumeInfo.imageLinks ? response.items[i].volumeInfo.imageLinks.smallThumbnail : "./images/notavailable.png";
		var info = response.items[i].volumeInfo.infoLink ? response.items[i].volumeInfo.infoLink : " ";
		var title = response.items[i].volumeInfo.title ? response.items[i].volumeInfo.title : "";
		var author = response.items[i].volumeInfo.authors ? response.items[i].volumeInfo.authors[0] : "";

		//why isn't it inserting AS a h2?
		var t = $("<h1>");
		t.append(title);
		var a = $("<h3>");
		a.append(author);

		var d1 = $("<div>"); //div for image
		d1.addClass("photo");
		d1.append('<a href="'+info+'" target="blank"><img src="'+url+'"</a>');
		dive.append(d1);

		var d2 = $("<div>"); //second div entry - needs class to make it wider?
		d2.addClass("info");
		d2.append(t);
		d2.append(a);
		dive.append(d2);


		dive.attr('class', "literature");
		//	-append the img to the wrapper
		results.append(dive);

	}
}




