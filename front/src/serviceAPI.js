export class serviceAPI {
    signIn = async (email, password) => {
       // return this.defered(
            return fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then( res => res.json())
    //    )
    }

    userProfile = async () => {
        return this.defered(fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'POST',
            headers: {
                        "Authorization": `Bearer ${localStorage.getItem('user')}` 
            },
        })
        .then( res => res.json()))
        //.catch(err => console.error(err))
    }
    updateProfile = async (firstName, lastName) => {
        console.log("🚀 ~ file: serviceAPI.js:27 ~ serviceAPI ~ updateProfile= ~ firstName:", firstName, lastName)
        
        return fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('user')}` 
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName
            })
        })
        .then( res => res.json())
        //.catch(err => console.error(err))
    }

    defered = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    }
}

//`Bearer ${localStorage.getItem('user')}` 