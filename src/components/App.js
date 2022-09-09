import React, { useEffect, useState } from "react"
import { getList, setItem  } from '../sevices/APIs'
import axios from "axios";


export default function App () {
    const [list, setList] = useState([]);
    const [post, setPost] = useState([])
    
    useEffect(() => {
        let mounted = true;
        getList()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            })
            return () => mounted = false;
    }, [])

    const token = '6ae33a85855d94d4879dace98654d2a54f81bf335a3440121e6caff536e718ad';
    
    function SubmitFunction(e) {
        e.preventDefault()
        console.log("Hello")
        setItem(post)
    }
    
    useEffect(() => {
        axios
            .post("https://gorest.co.in/public/v2/posts", {
                title : "Wooww I done it now"
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
    }, [])
    



    return (
        <div className="style">
            <h1>Your List Of Content Goes Here: </h1>
                <div className="content">
                    {list.map(item => <li key={item.title}>{item.title}</li>)}
                    <h1>Contents: </h1>
                    {list.map(item => <h3 key={item.title}><span className="bold">Title:</span> {item.title} <p>ID: {item.id}</p> <hr /> {item.body}</h3>)}
                    <hr />
                </div>
                <form className="form" >
                    <label>
                        <p>Adding New Item: </p>
                        <p>Title: </p><input type="text" onChange={event => setPost(event.target.value)} className="titletext" value={post}/>
                        <p>Content: </p>
                        <textarea type="text" className="bodytext"/>
                        <button type="submit" onClick={SubmitFunction}>Submit</button>
                    </label>
                </form>
        </div>
    )
}