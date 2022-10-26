import { useEffect, useRef } from "react";
import { revealAnimation } from "../../gsap/gsap";
import cardImage1 from '../../assets/images/card-img1.png';
import cardImage2 from '../../assets/images/card-img2.png';
import { IconPlus } from '../../assets/images/svg';



const TwoColCards = () => {
    let title = useRef(null);
    let cardLeft = useRef(null);
    let cardRight = useRef(null);

    useEffect(() => {
        revealAnimation(title);
        revealAnimation(cardLeft);
        revealAnimation(cardRight);
    }, []);

    return (
    <div className="twoColCards">
        <h3 className='section-heading text-green-200 gs_reveal' ref={(el) => (title = el)}>Lorem ipsum dolor sit amet</h3>
        <div className='innerWrapper'>
            <div className="card gs_reveal" ref={(el) => (cardLeft = el)}>
                <div className='img-wrapper'>
                    <img src={cardImage1} alt='card-1'/>
                </div>
                <div className='content'>
                    <h4 className='title'>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <a href='/' className='btn-primary' ><span className='text'>Lorem Ipsum</span> 
                        <span className='icon'>
                            <IconPlus/>
                        </span>
                    </a>
                </div>
            </div>

            <div className="card gs_reveal" ref={(el) => (cardRight = el)}>
                <div className='img-wrapper'>
                    <img src={cardImage2} alt='card-1'/>
                </div>
                <div className='content'>
                    <h4 className='title'>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <a href='/' className='btn-primary' ><span className='text'>Lorem Ipsum</span> 
                        <span className='icon'>
                            <IconPlus/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        
    </div>
      
    );
  }
  
  export default TwoColCards;
  