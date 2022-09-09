


export function getList() {
    return fetch('https://gorest.co.in/public/v2/posts')
    .then(data => data.json())
}


export function setItem(item) {
    const token = "f21bb6c5b7a6453a30da119508777777c5f0b6a902016b7f2fd6377aa7a549ab"
    
    return fetch('https://gorest.co.in/public/v2/posts?access-token=f21bb6c5b7a6453a30da119508777777c5f0b6a902016b7f2fd6377aa7a549ab', {
        method: 'POST',
        Authorization : `Bearer ${token}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
        },
        body: JSON.stringify({ item })
    })
    .then(data => data.json()) 
}