console.log("Welcome to Library 🚀");

class Books{
    constructor(bookName,author,type){
        this.book = bookName;
        this.author = author;
        this.type = type;
    }
}

// User-Interactions
class UI{

    static addBooksToList(book){
        let booksList = document.querySelector("#available-Books");

        let html = ""
        let row = document.createElement('tr');
        html += `
                    <th scope="row">1</th>
                    <td>${book.book}</td>
                    <td>${book.author}</td> 
                    <td>${book.type}</td>
                    <td><button type="button" class="btn btn-dark px-2 mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button></td>
                `
        row.innerHTML = html;
        booksList.append(row);
    }
    
}


let form = document.querySelector("#form");
form.addEventListener('submit',function(event){

    event.preventDefault();
    
    let title = document.querySelector("#bookName").value;
    let author = document.querySelector("#author").value;
    let type = document.querySelector("#type").value;
    
    const book = new Books(title,author,type);
    // console.log(book);

    // Add-books
    UI.addBooksToList(book);

});


