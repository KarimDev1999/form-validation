import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import Error from './Error';
import { errorsChecker } from '../utils/errorsChecker';





const LANGUAGE_ITEMES = ['Русский', 'Китайский', 'Английский', 'Китайский', 'Испанский'];


const initialValues = { name: '', email: '', phone: '' }

const Register = () => {
    const [language, setLanguage] = useState('Язык');
    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [accessConditions, setAccessConditions] = useState(false);
    const { handleChange, onSubmit, values, errors } = useForm(initialValues);



    const toggleDropdown = () => {
        setVisibleDropdown(!visibleDropdown)
    }

    const languageHandle = (language) => {
        setLanguage(language)
        setVisibleDropdown(false);
    }

    const toggleAccessConditions = () => {
        setAccessConditions(!accessConditions)
    }


    return (
        <div className='register'>
            <div className='container'>
                <div className="register__header">
                    <h1 className='register__header-title'>Регистрация</h1>
                    <p className='register__header-login'>Уже есть аккаунт? <a href="#">Войти</a></p>
                </div>
                <form onSubmit={onSubmit} className='form'>
                    <div className='form__name'>
                        <label htmlFor="name">Имя</label>
                        <input value={values.name} onChange={handleChange} placeholder='Введите Ваше имя' type="text" name="name" id="name" />
                        {errors.name && <Error error={errors.name} />}
                    </div>
                    <div className='form__email'>
                        <label htmlFor="email">Email</label>
                        <input value={values.email} onChange={handleChange} placeholder='Введите ваш email' type="text" name="email" id="email" />
                        {errors.email && <Error error={errors.email} />}
                    </div>
                    <div className='form__phone'>
                        <label htmlFor="phone">Номер телефона</label>
                        <input value={values.phone} onChange={handleChange} placeholder='Введите номер телефона' type="phone" name="phone" id="phone" />
                        {errors.phone && <Error error={errors.phone} />}
                    </div>
                    <div className='form__select'>
                        <label htmlFor="language">Язык</label>
                        <input onClick={toggleDropdown} type="button" value={language} name="language" id="language" />

                        {visibleDropdown && <div className='form__select-dropdown'>
                            <ul>
                                {LANGUAGE_ITEMES && LANGUAGE_ITEMES.map((language, i) => <li key={`${language}${i}`} onClick={() => { languageHandle(language) }}>{language}</li>)}
                            </ul>
                        </div>
                        }

                    </div>
                    <div className='form__checkbox'>
                        <input onChange={toggleAccessConditions} type="checkbox" id='checkbox' />
                        <label htmlFor="checkbox">Принимаю <a href="#">условия</a> использования</label>
                    </div>
                    <input className={`button ${!accessConditions || errorsChecker(errors) || values === initialValues ? 'button-disabled' : 'button-allowed'}`} disabled={!accessConditions || errorsChecker(errors) || values === initialValues ? true : false} type="submit" value='Зарегистрироваться' />
                </form>
            </div>
        </div>
    )
}

export default Register
