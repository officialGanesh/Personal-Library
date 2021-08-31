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
                    <td>${book.book}</td>
                    <td>${book.author}</td> 
                    <td>${book.type}</td>
                    <td><button type="button" class="btn btn-dark px-2 mx-1 delete">🔴</button></td>
                `
        row.innerHTML = html;
        booksList.append(row);

    };

    static alertNotification(classes,message){
        let div = document.createElement('div');
        div.classList = `alert alert-${classes}`;
        div.setAttribute('role','alert');
        div.append(document.createTextNode(message));
        
        let nav = document.querySelector('.container');
        let form = document.querySelector('#form');
        nav.insertBefore(div,form)
        
        setTimeout(function(){document.querySelector('.alert').remove()},1500);
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

    if(title.value==='' || author.value==='' || type.value === ''){
        
        UI.alertNotification('primary',"Fill all the inputs.")

    }else{
        
            // Add-books
            UI.addBooksToList(book);
            UI.alertNotification('success',"Book Added")
            // Remove-user-inputs
            UI.removeUserInputs(title,author,type);
    };

});

// Delete-books
let allListedBooks = document.querySelector("#available-Books");
allListedBooks.addEventListener('click',function(e){
    UI.removeBooks(e.target);
    UI.alertNotification('danger',"Book Removed.")
});


// Search-books

let query = document.querySelector("#query");
// console.log(query,searchBtn);
query.addEventListener('input',function(e){
    
    searchQuery = e.target.value.toLowerCase();
    let books = document.getElementById("available-Books");
    Array.from(books.getElementsByTagName('tr')).forEach(function(el){
        if(el.getElementsByTagName('td')[0].innerText.toLowerCase().includes(searchQuery)){
            el.style.display = "block";
        }else{el.style.display="none"};
    });
});







