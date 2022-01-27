import { useState } from 'react'
import { DotsHorizontalIcon } from '@heroicons/react/solid'

const SignupForm = (props) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="signup-section">
            <h1 className="font-medium text-xl">Sign up to see some people!</h1>
            <p className="text-sm font-light mt-2">By continuing, you agree to our User Agreement and Privacy Policy.</p>
            <div className="signup-form mt-6">
                <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="USERNAME" className="p-2 rounded border text-xs tracking-wider w-8/12 my-2" />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="EMAIL ID" className="p-2 rounded border text-xs tracking-wider w-8/12 my-2" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="PASSWORD" className="p-2 rounded border text-xs tracking-wider w-8/12 my-2" />
                <br />
                <button className="bg-theme font-medium px-6 py-1 rounded w-8/12 mt-4" onClick={() => props.callSignup(username, email, password)}>
                    {
                        props.isLoading ?
                            <DotsHorizontalIcon className='h-4 w-4 text-white mx-auto animate-ping' />
                            :
                            "Sign Up"
                    }
                </button>
                <p className="mt-6 font-medium text-sm text-red-500">{props.error}</p>
                <p className="mt-6 font-light text-sm">Already a redditor? <span className="font-semibold text-theme next-button cursor-pointer">LOGIN</span></p>
            </div>
        </div>
    );
};

export default SignupForm;






