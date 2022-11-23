const buttonLogin = document.getElementById('buttonLogin')
const getStartedButton = document.getElementById('getStarted')

const userEmail = document.getElementById('userEmail').value
const userPassword = document.getElementById('userPassword').value

const apiURL = '/api/auth'

async function createANewUser() {

    const response = await fetch(apiURL, { method: 'POST' })
    const data = await response.json()

    console.log(data)

}

buttonLogin.addEventListener('click', () => {
    createANewUser()
})
