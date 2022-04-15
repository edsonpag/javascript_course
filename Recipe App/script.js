const mainElement = document.querySelector('main')

const readFile = async () => {

    try {
        const response = await fetch("./recipes.json")
        const { recipes } = await response.json()


        return recipes
    }

    catch(err) {
        console.log(err)
    }
}


const displayRecipes = async () => {
    try {
        const recipes = await readFile()

        recipes.forEach((recipe) => {
            const recipeElement = document.createElement('div')
            recipeElement.className = 'recipe-card'
            mainElement.insertAdjacentElement('beforeend', recipeElement)

            const recipeHeader = document.createElement('div')
            recipeHeader.className = 'recipe-card-header'
            recipeElement.insertAdjacentElement('afterbegin', recipeHeader)

            const recipeTitle = document.createElement('h2')
            recipeTitle.id = 'recipe-title'
            recipeTitle.innerText = recipe.title
            recipeHeader.insertAdjacentElement('afterbegin', recipeTitle)

            const recipeDifficulty = document.createElement('p')
            recipeDifficulty.id = 'recipe-difficulty'
            
            if(recipe.difficulty === 0) {
                recipeDifficulty.innerText = 'Facil'
                recipeDifficulty.style.background = 'rgb(21, 209, 21)'
            }
            else if(recipe.difficulty === 1) {
                recipeDifficulty.innerText = 'Normal'
                recipeDifficulty.style.background = 'yellow'
            }
            else {
                recipeDifficulty.innerText = 'Difcil'
                recipeDifficulty.style.background = 'red'
            }

            recipeHeader.insertAdjacentElement('beforeend', recipeDifficulty)

            const ingredientsElement = document.createElement('div')
            ingredientsElement.className = 'ingredients'
            recipeElement.insertAdjacentElement('beforeend', ingredientsElement)

            const ingredientsParagraph = document.createElement('p')
            ingredientsParagraph.innerText = 'Ingredientes: '
            ingredientsElement.insertAdjacentElement('afterbegin', ingredientsParagraph)

            const ingredientsList = document.createElement('ol')
            ingredientsElement.insertAdjacentElement('beforeend', ingredientsList)

            recipe.ingredients.forEach((ingredient) => {
                const ingredientItem = document.createElement('li')
                ingredientItem.innerText = ingredient
                ingredientsList.insertAdjacentElement('beforeend', ingredientItem)
            })

            const preparationStepsElement = document.createElement('div')
            preparationStepsElement.className = 'preparation-steps'
            recipeElement.insertAdjacentElement('beforeend', preparationStepsElement)

            preparationStepsElement.insertAdjacentHTML('afterbegin', '<p>Preparação:</p>')

            const preparationStepsList = document.createElement('ol')
            preparationStepsElement.insertAdjacentElement('beforeend', preparationStepsList)
            
            recipe.preparation_steps.forEach((step) => {
                const stepItem = document.createElement('li')
                stepItem.innerText = step
                preparationStepsList.insertAdjacentElement('beforeend', stepItem)
            })

            const recipeFooterElement = document.createElement('div')
            recipeFooterElement.className = 'recipe-footer'
            recipeElement.insertAdjacentElement('beforeend', recipeFooterElement)
            recipeFooterElement.insertAdjacentHTML('afterbegin', `<p>${recipe.meal_type}, para ${recipe.number_of_people_it_serves} pessoas</p>`)

            /*
            recipeTitle.onclick = function(event) {
                console.log('clicou né pai')
            }
            */
        })
    }
    
    catch (err) {
        console.log(err)
    }
}