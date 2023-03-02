export class serviceAPI {
    signIn = async (email, password) => {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            if(!response.ok) {
                const errorMessage = "An error has occured, please check your email and your password and try again"
                throw new Error(errorMessage)
            }

        let loggedIn = await response.json()
        return loggedIn
    }
}