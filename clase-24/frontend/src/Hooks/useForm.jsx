import React, { useState } from 'react';

export const useForm = (formFields) => {
    const [formValuesState, setFormValuesState] = useState(formFields);

    const handleChangeInputValue = (e) => {
        const input_name = event.target.name;
        const input_value = event.target.value;
        console.dir(input_name, input_value);

        setFormValuesState((prevFormValuesState) => {
            return { ...prevFormValuesState, [input_name]: input_value };
        });
    };

    return {
        formValuesState,
        handleChangeInputValue,
    };
};
