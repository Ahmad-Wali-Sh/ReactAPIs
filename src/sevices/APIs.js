export function getList() {
    return fetch('https://gorest.co.in/public/v2/posts')
    .then(data => data.json())
}