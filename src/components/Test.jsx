import React, { useState, useEffect } from 'react';

const Test = props => {
    const [swList, setTestData] = useState(null);
    useEffect(() => {
        const result = props.getTest?.(props.pref).then(response => setTestData(response));
    }, [props])
    return (
        <div>
            <p>this is {JSON.stringify(swList)}</p>
        </div>
    )

}
export default Test;