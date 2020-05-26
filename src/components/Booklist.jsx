import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    return (
        <div>
        <ul>
            {
                bookData === null
                ? <p>Now loading...</p>
                : bookData.data.items.map((x, index) =>
                    <div key={index}>
                    <li><h4><a href={x.volumeInfo.canonicalVolumeLink}>{x.volumeInfo.title}</a></h4></li>
                        <p>{x.volumeInfo.authors} ・ {x.volumeInfo.publisher}</p>
                        { typeof x.volumeInfo.imageLinks !== 'undefined' && <img src={x.volumeInfo.imageLinks.smallThumbnail}></img>}
                    </div>
                )
            }
        </ul>
    </div>
    );
}

export default Booklist;