import React from "react"
import axios from "axios"


export function getList() {
    return fetch('https://gorest.co.in/public/v2/posts')
    .then(data => data.json())
}


const baseURL = "https://gorest.co.in/public/v2/users"



export function setItem(item) {
    const token = "f21bb6c5b7a6453a30da119508777777c5f0b6a902016b7f2fd6377aa7a549ab"
    
    return fetch('https://gorest.co.in/public/v2/users?access-token=6ae33a85855d94d4879dace98654d2a54f81bf335a3440121e6caff536e718ad', {
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