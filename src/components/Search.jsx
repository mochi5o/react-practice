import React, { useState, useEffect } from 'react';

const Search = props => {
    const [swList, setList] = useState(null);
    useEffect(() => {
        const result = props.getList?.(props.pref).then(response => setList(response));
    }, [props])
    return (
        <div>
            <input type='text' placeholder='search' onChange={this.useEffect}></input>
            <ul>
                {
                    swList === null
                    ? <p>...Loading</p>
                    : swList.data.data.map((x, index) => <li key={index}>{x.name}</li>)
                }
            </ul>
        </div>
    );
}
export default Search;