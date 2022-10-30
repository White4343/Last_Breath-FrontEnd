import React from 'react';
import s from "./Signing.module.scss";
import logo from "../../../assets/logo.svg";
import range from "lodash.range";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks/redux";
import {registration} from "../../../store/authentication/authentication.actions";
import {RootState} from "../../../store";

interface SignUpFormProps {
    onOpenSignIn: () => void
    onClickSigningClose: () => void
}

interface registerInputs {
    userName: string
    firstName: string
    lastName: string
    email: string
    month: string
    day: string
    year: string
    password: string
    repeatPassword: string
}

const SignUpForm: React.FC<SignUpFormProps> = ({onOpenSignIn, onClickSigningClose}) => {

    const isResError = useAppSelector((state: RootState) => state.auth.error)

    const {register, handleSubmit, formState: {errors}, watch} = useForm<registerInputs>();

    const dispatch = useAppDispatch();


    const onSubmit: SubmitHandler<registerInputs> = async formData => {

        try {
            console.log(formData)

            const birthDate = `${formData.year}-${formData.month}-${formData.day}`

            let userData = {
                username: formData.userName,
                first_name: formData.firstName,
                last_name: formData.lastName,
                birth_date: birthDate,
                email: formData.email,
                password: formData.password
            }

            if (!isResError) {
                onClickSigningClose()
                dispatch(registration(userData))
            }


        } catch (e) {

            console.log(e)
        }
    };


    return (
        <form className={s.signIn} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.titleBlock}>
                <img src={logo} alt="logo"/>
                <h2>Cinema “Last Breath”</h2>
            </div>
            <div className={s.fields}>
                <div className={s.fieldBlock}>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={"Enter your username name"}
                        className={s.field}
                        {...register("userName", {required: true})}
                    />
                    {errors.userName && <span>This field is required</span>}
                </div>

                <div className={s.fieldBlock}>
                    <label>First name</label>
                    <input
                        type="text"
                        placeholder={"Enter your first name"}
                        className={s.field}
                        {...register("firstName", {required: true})}
                    />
                    {errors.firstName && <span>This field is required</span>}
                </div>
                <div className={s.fieldBlock}>
                    <label>Last name</label>
                    <input
                        type="text"
                        placeholder={"Enter your last name"}
                        className={s.field}
                        {...register("lastName", {required: true})}
                    />
                    {errors.lastName && <span>This field is required</span>}
                </div>

                <div className={s.fieldBlock}>
                    <label>Email</label>
                    <input type="text" placeholder={"Enter your email"} className={s.field}
                           {...register("email", {
                               required: true, pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   message: "Invalid email address"
                               }
                           })}

                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className={s.fieldBlock}>
                    <label>Date of birth</label>
                    <div className={s.selects}>
                        <select {...register("month", {required: true})}>
                            <option value="" disabled selected>MM</option>
                            {
                                range(1, 13).map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))
                            }
                        </select>
                        <select {...register("day", {required: true})}>
                            <option value="" disabled selected>DD</option>
                            {
                                range(1, 32).map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))
                            }
                        </select>
                        <select {...register("year", {required: true})}>
                            <option value="" disabled selected>YYYY</option>
                            {
                                range(1900, new Date().getFullYear() + 1).map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))
                            }
                        </select>
                    </div>
                    {(errors.month || errors.day || errors.year) && <span>All fields are required</span>}
                </div>

                <div className={s.fieldBlock}>
                    <label>Password</label>
                    <input type="password" className={s.field} {...register("password", {required: true})}/>
                    {errors.password && <span>This field is required</span>}
                </div>
                <div className={s.fieldBlock}>
                    <label>Repeat Password</label>
                    <input type="password" className={s.field} {...register("repeatPassword", {
                        required: true, validate: (val: string) => {
                            if (watch('password') != val) {
                                return "Your passwords do no match";
                            }
                        }
                    })}/>
                    {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
                </div>
            </div>
            <div className={s.btnBlock}>
                {isResError && <p>A user with that username or email already exists</p>}
                <button type="submit">Sign Up</button>
                <p>Already have an account? <span onClick={onOpenSignIn}>Sign in!</span></p>
            </div>
        </form>
    );
};

export default SignUpForm;