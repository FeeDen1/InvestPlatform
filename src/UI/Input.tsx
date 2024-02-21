import React, {FC} from 'react';
import {useForm, UseFormRegister, UseFormReset} from "react-hook-form";


type InputProps = {
    label: string;
    InputClassName?: string;
    register: UseFormRegister<any>
    classNameLabel?: string;
    required?: boolean;
    type?: string;

}


const Input: FC<InputProps> = ({label, classNameLabel, register, InputClassName, required, type}: InputProps) => {
    const {
        formState: {errors},
    } = useForm()
    return (
        <div>
            <label className={classNameLabel}>
                {label}
            </label>
            <input
                type={type}
                className={InputClassName} {...register(label, {required})}
                aria-invalid={errors.label ? "true" : "false"}
            >

            </input>
        </div>

    )
        ;
};

export default Input;