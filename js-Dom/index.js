// alert('waassusp')\
const body_container = document.querySelector('.container')
const body_content = document.querySelector('.body-body')
const movies = document.querySelector('.body-movie')
const table_section = document.querySelector('.table-section')
const caption1 = document.querySelector('.caption1')
const caption2 = document.querySelector('.caption2')



// creating elements
const btn_container = document.createElement('div')
const first = document.createElement('button')
const second = document.createElement('button')
const third = document.createElement('button')
const input = document.createElement('input')
const small = document.createElement('small')

// setting attributes
btn_container.setAttribute('class', 'btn-container')
first.setAttribute('class', 'query-btn')
second.setAttribute('class', 'query-btn')
third.setAttribute('class', 'query-btn')
input.setAttribute('placeholder', 'mario or starwars')

//event listeners
first.addEventListener('click', () => { handleFirstClick() })
second.addEventListener('click', () => { handleSecondClick() })
third.addEventListener('click', () => { handleThirdClick() })


// setting  values
first.innerText = 'First'
second.innerText = 'Second'
third.innerText = 'Third'


// appending elements
body_container.appendChild(btn_container)
btn_container.append(first, second, third, input, small)

// first button click handler
async function handleFirstClick() {
    body_content.innerHTML = ''
    let data = await fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php ')
    // data = await data.json()
    console.log(data)

    // create elements
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    // attributes
    div.setAttribute('class', 'h1-container')
    // values
    h1.innerText = `${data} #000887718`
    div.appendChild(h1)
    body_content.appendChild(div)
}

// second button click handler
async function handleSecondClick() {
    if (input.value.trim()) {
        movies.innerText = ''
        small.innerText = ''
        if (input.value === 'mario') {
            let data = await fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=mario')
            data = await data.json()
            console.log(data)
            data && data.map(movie => {
                // create elements
                const movieCont = document.createElement('div')
                const series = document.createElement('h2')
                const img = document.createElement('img')
                const name = document.createElement('p')

                // set attributes
                img.setAttribute('src', movie.url)
                img.setAttribute('alt', movie.name)

                // set values
                series.innerText = movie.series
                name.innerText = movie.name

                // appending
                movieCont.append(series, img, name)
                movies.append(movieCont)
            }),
                caption1.innerText = "copy-right>Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo.© 2019 Nintendo."
            input.value = ''
        }
        else if (input.value === 'starwars') {
            let data = await fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=starwars')
            data = await data.json()
            // console.log(data)
            data && data.map(movie => {
                // create elements
                const movieCont = document.createElement('div')
                const series = document.createElement('h2')
                const img = document.createElement('img')
                const name = document.createElement('p')

                // set attributes
                img.setAttribute('src', movie.url)
                img.setAttribute('alt', movie.name)

                // set values
                series.innerText = movie.series
                name.innerText = movie.name

                // appending
                movieCont.append(series, img, name)
                movies.append(movieCont)
            }),
                caption1.innerText = "Star Wars © & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material © 2022 Electronic Arts Inc."
            input.value = ''
        }

    } else {
        small.innerText = 'Input has no value'
    }
}


//handle third click btn
async function handleThirdClick() {
    if (input.value.trim()) {
        small.innerText = ''
        if (input.value === 'mario') {
            let data = await fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=starwars')
            data = await data.json()
            console.log(data)
            table_section.innerHTML =
                `<table>
                <thead>
                    <td>Series</td>
                    <td>Name</td>
                    <td>Link</td>
                </thead>
                <tbody>
                    ${data && data.map((movie) => (
                    `<tr >
                        <td>${movie.series}</td>
                        <td>${movie.name}</td>
                        <td>${movie.url}</td>
                    </tr>`
                ))}
                </tbody>
            </table > `
            caption2.innerText = "copy-right>Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo.© 2019 Nintendo."
            input.value = ''
        } else if (input.value === 'starwars') {
            let data = await fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=starwars')
            data = await data.json()
            console.log(data)
            table_section.innerHTML =
                `<table>
                <thead>
                    <td>Series</td>
                    <td>Name</td>
                    <td>Link</td>
                </thead>
                <tbody>
                    ${data && data.map((movie) => (
                    `<tr >
                        <td>${movie.series}</td>
                        <td>${movie.name}</td>
                        <td>${movie.url}</td>
                    </tr>`
                ))}
                </tbody>
            </table> `
            caption2.innerText = "Star Wars © & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material © 2022 Electronic Arts Inc."
            input.value = ''
        } else {
            small.innerText = 'Invalid value'
            table_section.innerHTML = ''
        }
    } else {
        small.innerText = 'Input has no value'
    }
}
