import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Item from './Item';

const MyRoute = props => {
    const [myPlace, setMyPlace] = useState(null);

    const getDataFromFirestore = async () => {
        const itemListArray = await firebase.firestore().collection('myplace')
        .get();
        const placeArray = itemListArray.docs.map(x => {
            return {
                id: x.id,
                data: x.data(),
            }
        })
        setMyPlace(placeArray);
        return placeArray;
    }
        useEffect(() => {
            const result = getDataFromFirestore();
        }, [props])

    return (
        <div>
            <h3>行ったことある場所</h3>
            <ul>
                {
                    myPlace?.map((x, index) =>
                        <Item
                            key={index}
                            myplace={x}
                            index={index}
                            getDataFromFirestore={getDataFromFirestore}
                        />
                    )
                }
            </ul>
        </div>
    );
}
export default MyRoute;