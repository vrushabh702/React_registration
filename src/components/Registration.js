import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import analytics from './firebase.init';

const Registration = () =>{
    // const {register,handlesubmit,watch,formState:{errors},reset} = useForm()
    
    const [ createUserWithEmailAndPassword,user,error ] = useCreateUserWithEmailAndPassword(analytics)

    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        // console.log(user)
        console.log(errors)
    }

    if(user){
        console.log(user,'user inside if condition')
    }
    if (error){
        console.log(error ,'inside if condition')
    }

    return (
        <div className='flex justify-center lg:h-screen items-center'>
            <div className='card w-full md:w-96 items-center shadow-2xl bg-base-100'>
                <form onSubmit={handleSubmit(onSubmit)} className='card-body w-full lg:w-96'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input {...register("name",{required:true})} 
                        type='text' placeholder='name' className='input input-bordered'></input>
                        <span className='label-text text-error'>{errors.email?.type === 'required' && "Name is requried"}</span>

                    </div>
                    <div className='form-control'>
                        <label className='lable'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input {...register("email",{required:true})} type='email' placeholder='email' className='input input-bordered'/>
                        <span className='label-text text-error'>{errors.email?.type === 'required' && 'Email is required'}</span>

                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input {...register("password",{required:true})} type='password' placeholder='password' className='input input-bordered'/>
                        <span className='label-text text-error'>{errors.password && 'password is required'}</span>
                    </div>
                    <div className='form-control mt-6'>
                        <button type='submit' className='btn'>Registration</button>
                    </div>
                </form>
                <label className='mt-2'>
                    Already having an account? <Link to='/login' className='btn btn-link text-white underline px-0'>Login</Link>
                </label>
            </div>
        </div>
    );
};

export default Registration;