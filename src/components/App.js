import React, { useEffect, useState } from "react"
import { getList } from '../sevices/APIs'


export default function App () {
    const [list, setList] = useState([]);

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
    


    return (
        <div className="style">
            <h1>Your List Of Content Goes Here: </h1>
                <div className="content">
                    {list.map(item => <li key={item.title}>{item.title}</li>)}
                    <h1>Contents: </h1>
                    {list.map(item => <h3 key={item.title}><span className="bold">Title:</span> {item.title} <p>ID: {item.id}</p> <hr /> {item.body}</h3>)}
                    <hr />
                </div>
        </div>
    )
}