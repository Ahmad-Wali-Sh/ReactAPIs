import React from "react"
import axios from "axios"


export function getList() {
    return fetch('https://gorest.co.in/public/v2/posts')
    .then(data => data.json())
}

const token = "6ae33a85855d94d4879dace98654d2a54f81bf335a3440121e6caff536e718ad"

export function setItem(item){
        axios
            .post("https://gorest.co.in/public/v2/posts", {
                "id": 123,
                "title" : "Yes We Are Here...",
                "user": "Ahmad Wali",
                "user_id": 1232,
                "body": "This is the last drop of bugs I think"
            }
            ).catch((error) => {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log("Error", error.message);
                }
                console.log(error.config);
              });
}





