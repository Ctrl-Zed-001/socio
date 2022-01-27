import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import config from "../config.json"

// Import Swiper styles
import 'swiper/css';

// COMPONENTS
import SignupForm from '../Components/AuthComponents/SignupForm';
import LoginForm from '../Components/AuthComponents/LoginForm';
import axios from 'axios';

const Signup = () => {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const callSignup = (username, email, password) => {
        setIsLoading(true)
        axios.post(`${config.api_uri}/user/signup`, { username, email, password })
            .then(res => {
                if (res.data.status === 'failed') {
                    setError(res.data.message)
                } else {
                    localStorage.setItem('access_token', res.data.token)
                }
                console.log('data', res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setIsLoading(false)
    }

    const callLogin = (username, password) => {
        console.log(username, password)
    }
    return (
        <section className="signup_page">
            <div className="flex">
                <img src="/images/auth_wallpaper.jpg" alt="" className="h-screen object-cover w-7/12" />
                <div className="right-side p-6 w-5/12">
                    <img src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="" className="h-14 w-14 logo mb-10" />
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        className='w-full'
                        navigation={{
                            prevEl: '.prev-button',
                            nextEl: '.next-button'
                        }}
                    >
                        <SwiperSlide><SignupForm callSignup={callSignup} error={error} isLoading={isLoading} /></SwiperSlide>
                        <SwiperSlide><LoginForm callLogin={callLogin} /></SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Signup
