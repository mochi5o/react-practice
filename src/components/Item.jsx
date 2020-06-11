import React from 'react';
import firebase from '../firebase';

const Item = ({ index, myplace, getDataFromFirestore }) => {
    const deleteDataOnFirestore = async (collectionName, documentId) => {
        const removedData = await firebase.firestore()
            .collection(collectionName)
            .doc(documentId)
            .delete();
        getDataFromFirestore();
        return
    }


    return (
        <li key={index} id={myplace.id}>
            <div>
                <p>湧き水の名前：{myplace.data.name}</p>
                <p>コメント：{myplace.data.comment}</p>
            </div>
            <button
                value={myplace.id}
                onClick={e => deleteDataOnFirestore('myplace', myplace.id)}
            >delete</button>
        </li>
    )
}
export default Item;