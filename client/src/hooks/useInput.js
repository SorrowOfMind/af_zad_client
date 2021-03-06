import {useState} from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => setValue(e.target.value);
    const clearInput = () => setValue('');

    return [
        value, 
        {
            setInput: {
                value,
                onChange: handleChange
                },
            clearInput
        }
    ];
}

export default useInput;