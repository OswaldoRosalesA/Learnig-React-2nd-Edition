import {useState} from 'react';

export const useInput = initialValue => {
    let [value, setValue] = useState(initialValue);
    return [
        {value, onChange: evt => setValue(evt.target.value)},
        () => setValue(initialValue)
    ];
}