import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase.js'
import SendMessage from './SendMessage.js';
import SignOut from './SignOut.js';

function Line() {

    //メッセージ情報
    const [messages, setMessages] = useState([]);

    //setMessageの情報を１つずつ取得する
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);


    //取得した情報を出力する(id, text, photoURL, uid)・送信ボタンを追加
    return (
        <div> 
            <SignOut />
            <div className='msgs'>
                {messages.map(({ id, text, uid, photoURL }) => (   
                    <div>
                        <div key={id}
                            className={`msg ${
                                uid === auth.currentUser.uid ? "sent" : "received"
                            }`} 
                        >
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
                <SendMessage />
            </div>
        </div>
    )
}

export default Line