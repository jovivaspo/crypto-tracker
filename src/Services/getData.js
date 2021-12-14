const getData = async (url, options) => {

    return fetch(url, options)
        .then(res => {

            if (!res.ok) Promise.reject({
                error: true,
                status:res.statusText,
                statusText:res.statusText
            })

            return res.json()
        })
        
        .catch(error=>console.log(error))


}

export { getData }