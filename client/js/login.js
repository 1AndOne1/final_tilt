const form = document.querySelector("form")

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(form);
    const username = formData.get('username')
    const password = formData.get('password')

    try {
        const url = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        const data = await url.json()
        console.log(data)
            localStorage.setItem("username", JSON.stringify(data.username))
            localStorage.setItem("token", JSON.stringify(data.token))
            if (localStorage.getItem("token") !== null) {
                window.location.replace("./home.html")
            }
    } catch (e) {
        console.log(e)
    }
})