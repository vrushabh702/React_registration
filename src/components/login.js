import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = ()  => {
    const {register,handleSubmit,formState: {errors}} = useForm();

    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div className='flex justify-center lg:min-h-screen items-center'> 
            <div className='card w-full md:w-96 items-center shadow-2x1 bg-base-100'>
                <form onSubmit={handleSubmit(onSubmit)} className='card-body w-full lg:w-96'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input type='email' placeholder='email' className='input input-bordered' {...register("email",{required:true})} />
                        <span className='label-text text-error'>{errors.email?.type === 'required' && 'email is required'}</span>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='password' className='input input-bordered' {...register("password", {required: true})} /> 
                        <span className='label-text text-error'>{errors.password?.type === 'required' && 'password is required'}</span>

                    </div>
                    <div className='form-control mt-6'>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                </form>

                <label className='mt-2'>
                    don't have an account ? <Link to='/registration' className='btn btn-link text-white underline px-0'>Registration </Link>
                </label>
            </div>
        </div>
    );
};

export default Login;