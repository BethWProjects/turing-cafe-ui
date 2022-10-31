const fetchData = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if (!response.ok) {
            throw new Error('Not a 200 status')
        }
        return response.json()
    })
}

export default fetchData