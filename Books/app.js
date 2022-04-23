const API_KEY = "AIzaSyAyb8Vl__aogl7zEoUl0-FTyLKrrmm1wu4"
const API_URL = "https://www.googleapis.com/books/v1/volumes"

const mainEl = document.querySelector('main')

const inputElement = document.querySelector('#search-book')
const submitButton = document.querySelector('.submit-button')

let limit = 40

submitButton.addEventListener('click', async (event) => {
    if(inputElement.value === '') return

    const search = inputElement.value
    const { data } = await getData(search)

    displayBooks(data.items)
})

const getData = (search) => {
    const queryString = `${API_URL}?key=${API_KEY}&q=${search}&maxResults=${limit}`

    return axios.get(queryString)
}

const displayBooks = (books) => {
    console.log(books[0])

    mainEl.innerHTML = ''

    books.forEach((book) => {
        let { volumeInfo: { imageLinks: { thumbnail }} } = book
        let { volumeInfo: { authors, categories, description, previewLink, title, publishedDate } } = book
        const { saleInfo: { buyLink }} = book

        let amount = 'Indisponivel'

        if(book.saleInfo.retailPrice) {
            amount = book.saleInfo.retailPrice.amount
        }

        if(!description) {
            description = 'Descrição indisponivel'
        }

        mainEl.innerHTML += `
        <div class="book-card">
            <div class="book-header">
                <div class="book-thumbnail">
                    <img src=${thumbnail} alt=${title}>
                </div>
                <div class="card-info">
                    <p>${authors}</p>
                    <p>${categories}</p>
                    <p>${title}</p>
                    <p>${publishedDate}</p>

                    <div class="footer">
                        <button class="preview-btn">
                            <a href=${previewLink} target="_blank">Prévia</a>
                        </button>
                        <button class="buy-btn">
                            <a href=${buyLink} target="_blank">Comprar</a>
                        </button>
                        <span class="price">${amount} R$</span>
                    </div>
                    
                </div>
            </div>

            <div class="book-body">
                <div class="description">
                    <p>${description}</p>
                </div>
            </div>
        </div>
        `
    })
}