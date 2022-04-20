const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const mainElement = document.querySelector('main')
const filterElement = document.querySelector('.filter')

const displayMenu = (serializedMenu) => {
  let menuHtml = serializedMenu.map((item) => {

    return `<section class="menu-item">
      <div class="menu-img">
        <img src=${item.img} alt=${item.title} title=${item.title} loading="lazy">
      </div>
  
      <div class="menu-description">
        <div class="menu-title">
          <span class="title">${item.title}</span>
          <span class="price">$${item.price}</span>
        </div>
  
        <div class="menu-text">
          <span>${item.desc}</span>
        </div>
      </div>
    </section>`
  })

  menuHtml = menuHtml.join('')
  mainElement.innerHTML = menuHtml
}

const displayFilterButtons = () => {
  const filterBtns = menu.reduce((btns, item) => {

  if(!btns.includes(item.category)) {
    btns.push(item.category)
  }

  return btns

  }, ['all'])


  let filterButtonsHtml = filterBtns.map((filterBtn) => {

    return `<button class="filter-btn" data-category=${filterBtn}>${filterBtn}</button>`
  })

  filterButtonsHtml = filterButtonsHtml.join('')
  filterElement.innerHTML = filterButtonsHtml
}

const filter = () => {
  const filterBtnsElement = document.querySelectorAll('.filter-btn')

  filterBtnsElement.forEach((filterBtn) => {
    filterBtn.addEventListener('click', (event) => {
      const category = filterBtn.getAttribute('data-category')
      let serializedMenu = menu.filter((item) => {
        if(item.category === category) {
          return item
        }
      })

      if(category === 'all') {
        serializedMenu = menu
      }

      displayMenu(serializedMenu)
    })
  })

}


const app = () => {
  displayMenu(menu)
  displayFilterButtons()
  filter()
}

document.onload = app()

