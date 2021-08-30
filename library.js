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
                    <td><button type="button" class="btn btn-dark px-2 mx-1 delete">🔴</button></td>
                `
        row.innerHTML = html;
        booksList.append(row);

    };



    static removeUserInputs(title,author,type){
        title.value="";
        author.value="";
        type.value="";
    };

    static removeBooks(element){
        if(element.classList.contains("delete")){
            element.parentElement.parentElement.remove();
        }
    };

}


let form = document.querySelector("#form");
form.addEventListener('submit',function(event){

    event.preventDefault();
    
    let title = document.querySelector("#bookName");
    let author = document.querySelector("#author");
    let type = document.querySelector("#type");

    const book = new Books(title.value,author.value,type.value);
    // console.log(book);

    // Add-books
    UI.addBooksToList(book);

    // Remove-user-inputs
    UI.removeUserInputs(title,author,type);

});

// Delete-books
let allListedBooks = document.querySelector("#available-Books");
allListedBooks.addEventListener('click',function(e){
    UI.removeBooks(e.target);
});
