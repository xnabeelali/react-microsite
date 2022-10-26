import React, { useEffect, useRef } from 'react';
import Select from 'react-select';
import parkImg from '../../assets/images/park-img.png';
import { IconPlus } from '../../assets/images/svg';
import { revealAnimation } from '../../gsap/gsap';

const SignupForm = () => {
    let signupForm = useRef(null);

    useEffect(() => {
        revealAnimation(signupForm);
    }, []);

    const options = [
            { value: 'student', label: 'Student' },
            { value: 'teacher', label: 'Teacher' },
        ];

    const handleSubmit = e => {
        e.preventDefault();
        //TO DO: Form submit handler
        console.log('triger-submit')
    }
    return (
    <div className="signupForm gs_reveal" ref={(el) => (signupForm = el)}>
        <h3 className='section-heading text-green-100'>Lorem ipsum dolor sit amet</h3>
        <div className='innerWrapper'>
            <div className="img-wrapper">
                <img className='bg-image' src={parkImg} alt='bg-img'/>
                <p className='img-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            <div className="form-wrapper">
                <form className='signup-form-grid' id="signupform" action="" method="post" onSubmit={ e => handleSubmit(e) }>
                    <div className='form-group mb-8 lg:mb-20 lg:col-start-1 lg:col-end-3'>
                        <Select classNamePrefix="customSelect" options={options} required placeholder="Sign up as"/>
                    </div>

                    <div className='form-group mb-8'>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="First Name"
                            name="firstName"
                            required
                            />
                    </div>

                    <div className='form-group mb-8'>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Last Name"
                            name="lastName"
                            required
                            />
                    </div>

                    <div className='form-group mb-8 lg:row-span-1 lg:col-start-1 lg:col-end-3'>
                        <input
                            type="email"
                            className="input-field"
                            placeholder="Email"
                            name="email"
                            required
                            />
                    </div>
                    <div className='form-group mb-8'>
                        <input
                            type="checkbox"
                            className="styled-checkbox"
                            name="terms"
                            required
                            />
                        <label htmlFor="terms">I accept the Terms and Conditions</label>
                    </div>

                    <div className='form-group mb-8'>
                        <input
                            type="checkbox"
                            className="styled-checkbox"
                            name="policy"
                            required
                            />
                        <label htmlFor="policy">I accept the Privacy Policy</label>
                    </div>

                    <div className='form-group mt-5'>
                        <button type='submit' className='btn-primary submit-btn' ><span className='text'>Signup Now</span> 
                            <span className='icon'>
                                <IconPlus/>
                            </span>
                        </button>
                    </div>
                   
                </form>
            </div>
        </div>
        
    </div>
      
    );
  }
  
  export default SignupForm;
  