import { useEffect, useRef } from "react";
import { revealAnimation } from "../gsap/gsap";

const TwoColContent = () => {
    let mainTitle = useRef(null);
    let subTitle = useRef(null);
    let desc = useRef(null);

    useEffect(() => {
        revealAnimation(mainTitle);
        revealAnimation(subTitle);
        revealAnimation(desc);
    }, []);

  return (
    <div className='twoColContent'>
        <div className='col'>
            <h2 className='main-title gs_reveal gs_reveal_fromLeft' ref={(el) => (mainTitle = el)}>Why do we use it?</h2>
        </div>
        <div className='col'>
            <h3 className='sub-title gs_reveal' ref={(el) => (subTitle = el)}>It is a long established fact</h3>
            <p className='desc gs_reveal' ref={(el) => (desc = el)}>that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various .</p>
        </div>
    </div>
  );
}

export default TwoColContent;
