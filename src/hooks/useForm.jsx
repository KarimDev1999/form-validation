import React, { useState } from 'react';
import { validate } from '../utils/validations';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialValues);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors({ ...errors, ...validate(value, name) })
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('registration succeed')
    }

    return { handleChange, onSubmit, values, errors }
}

export default useForm
