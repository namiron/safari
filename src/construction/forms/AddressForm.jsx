import React from 'react'
import { useForm } from 'react-hook-form'
import forms from '../../modules/forms.module.scss'
import { ADDRESS, CITY_ADDRESS, EMAIL_ADDRESS, ERROR_TEXT, FULL_NAME, PHONE_NUMBER, PLACE_ORDER, SHOPPING_ADDRESS } from '../../common/constants'
import shopDetails from '../../modules/shoppingDetails.module.scss';

import { MdError } from 'react-icons/md'
import { useCustomCurrentUser } from '../../hooks/untils'
import { FaCheckCircle } from 'react-icons/fa';



const AddressForm = ({ createAddressForUser, createCheckForBy }) => {
    //---------------------------------------------
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' })
    const currentUser = useCustomCurrentUser()

    const handleSubmitAddress = (data) => {
        createAddressForUser(data, currentUser)
        createCheckForBy()
        reset()
    }
    //---------------------------------------------

    return (
        <form onSubmit={handleSubmit(handleSubmitAddress)} className={forms.addressFormBlock} >
            <div className={shopDetails.heading}>
                <h2 className={shopDetails.title}><FaCheckCircle className={shopDetails.check} /> {SHOPPING_ADDRESS}</h2>
            </div>
            <div className={forms.inner}>
                <div className={forms.handing}>
                    <h3 className={forms.titleInput}>{EMAIL_ADDRESS}</h3>
                </div>
                <div className={forms.emailBlock}>
                    <input type="email"  {...register('email', { required: true })} />
                </div>
                <div className={forms.error}>
                    {errors?.email && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}
                </div>
            </div>

            <div className={forms.inner}>
                <div className={forms.handing}>
                    <h3 className={forms.titleInput}>{FULL_NAME}</h3>
                </div>
                <div className={forms.nameBlock}>
                    <input type="text" {...register('name', { required: true })} />
                </div>
                <p className={forms.error}>
                    {errors?.name && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}
                </p>
            </div>

            <div className={forms.inner}>
                <div className={forms.handing}>
                    <h3 className={forms.titleInput}>{ADDRESS}</h3>
                </div>
                <div className={forms.addressBlock}>
                    <textarea {...register('address', { required: true })}></textarea>
                </div>
                <p className={forms.error}>
                    {errors?.address && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}
                </p>
            </div>

            <div className={forms.inner}>
                <div className={forms.handing}>
                    <h3 className={forms.titleInput}>{CITY_ADDRESS}</h3>
                </div>
                <div className={forms.cityBlock}>
                    <input type="text" {...register('city', { required: true })} />
                </div>
                <p className={forms.error}>
                    {errors?.city && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}
                </p>
            </div>

            <div className={forms.inner}>
                <div className={forms.handing}>
                    <h3 className={forms.titleInput}>{PHONE_NUMBER}</h3>
                </div>
                <div className={forms.phoneNumberBlock}>
                    <input type="number" {...register('number', { required: true })} />
                </div>
                <p className={forms.error}>
                    {errors?.number && <span className={forms.errorText}><MdError />{ERROR_TEXT}</span>}
                </p>
            </div>
            <button className={shopDetails.submitCheck} type="submit">{PLACE_ORDER}</button>
        </form>
    )
}

export default AddressForm
