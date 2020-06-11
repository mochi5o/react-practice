import React, { useState } from 'react';
import firebase from '../firebase';

const InputForm = ({ getDataFromFirestore }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    // Firestoreにデータを送信する
    const postDataToFirestore = async (collectionName, postData) => {
        const addedData = await firebase.firestore().collection(collectionName).add(postData);
        return addedData;
    }
    //submitボタンのクリックイベント
    const submitData = async () => {
        if (name === '' || comment === '') {return false};
        const postData = {
            name: name,
            comment: comment,
        }
        const addedData = await postDataToFirestore('myplace', postData);
        setName('');
        setComment('');
        getDataFromFirestore();
    }

    return (
        <form action=''>
            <div>
                <ol>
                    <label htmlFor="name">行った湧き水スポット　</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </ol>
                <ol>
                    <label htmlFor="comment">ひとことコメント　</label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </ol>
                <ol>
                    <button
                        type="button"
                        onClick={submitData}
                    >submit</button>
                </ol>
            </div>
        </form>
    )
}
export default InputForm;