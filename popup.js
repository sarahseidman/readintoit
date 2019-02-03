var books = new Vue({
	el: "wrapper", //is this the right element??? is el even short for element?
	data: {
		book: {
			obj: null,
			title: "",
			img: "",
			author: "",
		},
		booksList: [], //list of actual book objects, not titles!!!!
		find: "",
		link: "https://i.imgur.com/Wucf6hl.png"
	},

	methods: {
		findBooks: function(){
			var url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.find;
			axios.get(url).then(function(response){
				for(var i=0; i<10; i++){
					//adds the first 10 books to the list
					//edge cases: what if there are less than 10 results?
					books.book.obj = response.data.items[i];
					books.book.title = response.data.items[i].volumeInfo.title;
					books.book.img = response.data.items[i].volumeInfo.imageLinks.smallThumbnail;
					books.book.author = response.data.items[i].volumeInfo.authors[0]; //first author only

					books.booksList.push(books.book.title);
				}
				

			})
			

		}
		// generateBooksList: function(){
		// 	alert("working");
		// 	findBooks();
		// 	for(var j=0; j<booksList.length; j++){

		// 	}
		// }

	}
})







