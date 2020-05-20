import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    console.log(bookData);
    return (
        <div>
        <ul>
            {
                bookData === null
                ? <p>Now loading...</p>
                : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}</li>)
            }
        </ul>
    </div>
    );
}

export default Booklist;