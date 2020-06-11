import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import InputForm from './InputForm';
import Item from './Item';

const Waterlist = props => {
    const [swList, setList] = useState(null);
    useEffect(() => {
        const result = props.getList?.(props.pref).then(response => setList(response));
    }, [props])

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
            <InputForm
                getDataFromFirestore={getDataFromFirestore}
            />
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
            <hr></hr>
            <ul>
                {
                    swList === null
                    ? <p>...Loading</p>
                    : swList.data.data.map((x, index) =>
                        <div key={index}>
                            <h4>{x.access} {x.name}（{x.furigana}）</h4>
                            <p>{x.overview}</p>
                            <input type="hidden" value={x.latitude}></input>
                            <input type="hidden" value={x.longitude}></input>
                            <input type="hidden" value={x.id}></input>
                            {/* <button
                                onClick={
                                    e => postDataToFirestore('spring-water', todo)
                                }
                            ></button> */}
                        </div>
                    )
                }
            </ul>
        </div>
    );
}
export default Waterlist;