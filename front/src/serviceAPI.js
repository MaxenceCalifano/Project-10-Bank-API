export class serviceAPI {
    signIn = async (email, password) => {
        return this.defered(
            fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then( res => res.json())
        )
    }

    defered = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 5000);
        })
    }
}