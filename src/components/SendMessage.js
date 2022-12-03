import { Input } from '@mui/material'
import React, { useState } from 'react'
import { db, auth } from '../firebase.js'
import firebase from 'firebase/compat/app'
import SendIcon from '@mui/icons-material/Send'


function SendMessage() {

    //メッセージ情報
    const [message, setMessage] = useState("");

    const {uid, photoURL} = auth.currentUser;

    function sendMessage(e) {
        e.preventDefault();

        //firestoreにadd(データをfirebaseに送る)
        db.collection("messages").add({
            text: message,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(), //エンターを押した時間を取得
        });
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='sedMsg'>
                <Input
                    style={{
                            width: "78%",
                            fontSize: "15px",
                            fontWeight: "550",
                            marginLeft: "5px",
                            marginBottom: "-3px",
                        }}
                    onChange={(e) => setMessage(e.target.value)} //入力した値を関数に代入する
                    placeholder="メッセージを入力して下さい"
                    type='text'
                    value={message}
                />
                <SendIcon />
            </div>
            </form>
        </div>
    )
}

export default SendMessage