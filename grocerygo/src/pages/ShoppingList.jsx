import React from 'react';
import axios from 'axios';
require("dotenv").config();

export default function ShoppingList(){
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        axios.post("https://api.openai.com/v1/chat/completions", 
            {
                model: "gpt-3.5-turbo",
                messages: [
                {
                    role: "user",
                    content: `split this story into 4 main parts ${req.body.content} set the output to be in json format with keys 1, 2, 3, 4`,
                },
                ],
                max_tokens: 1000,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then(res => {
                setList(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <View>ShoppingList</View>
    )
}
