import React from 'react'
import { useForm } from 'react-hook-form'
import { MdError } from "react-icons/md";
import forms from '../../modules/forms.module.scss'
import { CAPITAL_LETTER, CREATE_ACCOUNT_BTN, ERROR_TEXT, FOR_EMAIL, MINIMUM, ONE_NUMBER, PASSWORD_REQUIREMENTS, PRIVACY, SYMBOLS } from '../../common/constants';





const CreateAccount = ({ handleSetUser, onClose }) => {
    //--------------------------------------
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const handleCreateNewUser = (data) => {
        handleSetUser(data)
        onClose(false)
        reset()
    }
    //--------------------------------------

    return (
        <div className={forms.createAccountWrapper}>
            <form className={forms.formAccount} onSubmit={handleSubmit(handleCreateNewUser)} >
                <div className={forms.userDataCollection}>
                    <div className={forms.firstName}>
                        <input type="text" placeholder='First name *'
                            {...register('firstName', {
                                required: true,
                            })}
                        />
                        <div className={forms.error}>{errors?.firstName && <span classamNe={forms.errorText}><MdError />{ERROR_TEXT}</span>}</div>
                    </div>
                    <div className={forms.LastName}>
                        <input type="text" placeholder='Last name *'
                            {...register('lastName', {
                                required: true,
                            })} />
                        <p className={forms.error}>{errors?.lastName && <span className={forms.errorText}><MdError /> {ERROR_TEXT}</span>}</p>
                    </div>
                    <div className={forms.email}>
                        <input type="text" placeholder='Email'
                            {...register('email', {
                                required: true,
                            })} />
                        <p className={forms.error}>{errors?.email && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}</p>
                    </div>
                    <div className={forms.password}>
                        <input type="password" placeholder='Password'
                            {...register('password', {
                                required: true,
                            })} />
                        <p className={forms.error}>{errors?.password && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}</p>
                    </div>
                </div>
                <div className={forms.requirements}>
                    <h3 className={forms.perquirementsTitle}>{PASSWORD_REQUIREMENTS}</h3>
                    <ul className={forms.requirementsList}>
                        <li className={forms.requirementsItems}>{MINIMUM}</li>
                        <li className={forms.requirementsItems}>{CAPITAL_LETTER}</li>
                        <li className={forms.requirementsItems}>{ONE_NUMBER}</li>
                        <li className={forms.requirementsItems}>{SYMBOLS}</li>
                    </ul>
                </div>
                <div className={forms.permissions}>
                    <div className={forms.signUp}>
                        <div className={forms.signUpBox}>
                            <input type="checkbox"  {...register('signUp', {
                                required: true,
                            })} />
                            <p className={forms.signUpText}>{FOR_EMAIL}</p>
                        </div>

                        <p className={forms.error}>{errors?.signUp && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}</p>
                    </div>
                    <div className={forms.privacyPolicy}>
                        <div className={forms.privacyBox}>
                            <input type="checkbox"
                                {...register('privacy', {
                                    required: true,
                                })} />
                            <p className={forms.privacyPolicyText}>{PRIVACY}</p>
                        </div>
                        <p className={forms.error}>{errors?.privacy && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}</p>
                    </div>
                    <button type='submit' className={forms.createAccountBtn} disabled={!isValid} >{CREATE_ACCOUNT_BTN}</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;