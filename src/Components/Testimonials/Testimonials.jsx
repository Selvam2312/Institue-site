import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackward = () => {
    if(tx < 0){
        tx +=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sofia Ivanova</h3>
                            <span>Besant, Chennai</span>
                        </div>
                    </div>
                    <p>I had a great learning experience with Raja Sir for the Python course at Besant Technologies. 
                        He explains concepts clearly with real-time examples, making them easy to understand. As a beginner, I gained strong confidence to work on projects. Highly recommended for anyone wanting to learn Python effectively!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Luca Rossi</h3>
                            <span>Besant, Chennai</span>
                        </div>
                    </div>
                    <p>Learning python course and it was a great experience. Her clear explanations and structured teaching style made complex topics easy to follow. 
                        The sessions were well-balanced with theory and practical examples, which helped me apply what I learned effectively. </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Isabella García</h3>
                            <span>Besant, Chennai</span>
                        </div>
                    </div>
                    <p>I recently completed web technologies, including HTML, CSS, JavaScript, and popular frameworks like React. 
                        IMRAN sir is my Trainer, and His teaching style is structured and easy to learn. He is friendly to approaching 
                        when it comes to clearing doubt, and the placement group is always pushing to get a job.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Kenji Yamamoto</h3>
                            <span>Besant, Chennai</span>
                        </div>
                    </div>
                    <p>I finished my Python Programming Course during the month of August I had an excellent experience at Besant Technologies. 
                        The trainer was incredibly knowledgeable, patient, and made learning so enjoyable. I truly appreciate their efforts in 
                        explaining concepts clearly and ensuring everyone understood. A big thank you as well to the friendly and helpful staff at the reception. </p>
                </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials
