import React from 'react'
import { useRef } from 'react';
import './Main.css';
function Main() {
  const hero=useRef(null);
  const hero2=useRef(null);
  const hero3=useRef(null);
  const blog=useRef(null);
  const contact=useRef(null);
  const scrollToSection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    }
    )
  }

  return (
    <>
    <div className='mypro'>
      <div> 
      <ul class="list1">
        <li class="list11">Welcome</li>
        <li onClick={()=>scrollToSection(hero)} class="list">Home</li>
        <li  onClick={()=>scrollToSection(hero2)} class="list">Features</li>
        <li  onClick={()=>scrollToSection(hero3)} class="list">About Us</li>
        <li onClick={()=>scrollToSection(blog)} class="list">Blog</li>
        <li onClick={()=>scrollToSection(contact)} class="list">Contact</li>
      </ul>
    <div class='hero' ref={hero}>
    <div class="abc">
    <div class="main1-box">
        <span>Make Your Business More and</span><br/>
        <span>More Profitable</span>
    </div>
    <div class="mainn">
        <span>Establish your small business website with all the essentials—from intuitive design features to built-in management tools and secure payment solutions.</span>
    </div>
    <div className='maitag'>
        <a href='C:\\'>Started</a>
    </div>
    </div>
    </div>
    </div>
      <div ref={hero2} className="hero2">
      <div className='hero22'>
      <div className='head-box'>
        <h1>Welcome To Features</h1>
        <span>Empower your business with seamless tools to enhance productivity and Unlock your potential with data-driven solutions for success.</span>
      </div>
      <div className='head-box1'>
        <span class="head-list1"><h4>Market Analysis</h4>The study of industry trends, customer needs, and competitive dynamics to guide strategic decisions.</span>
        <span class="head-list1"><h4>Market Counsultancy</h4>Our market consultancy delivers tailored insights and strategies to drive your business success</span>
        <span class="head-list1"><h4>Easy Purchase</h4>Our easy purchase process ensures a seamless and hassle-free shopping experience to our customers.</span>
        </div>
        <div className='head-box2'>
        <span class="head-list2"><h4>Free Updates</h4>Enjoy free updates to keep your solutions current and optimized at no extra cost.</span>
        <span class="head-list2"><h4>100% Satisification</h4>We guarantee 100% satisfaction with our services, ensuring your complete peace of mind.</span>
        <span class="head-list2"><h4>Easy</h4>Experience simplicity with our user-friendly and hassle-free solutions.</span>
      </div>
      </div>
    </div>
      <div ref={hero3} className="hero3">
        <div className='hero33'>
        <div className='body-box'>
        <h1>About Us</h1>
        </div>
        <div className='icon-1'>
          <img src="https://media.istockphoto.com/id/1028869800/photo/close-up-of-a-hands-of-a-businessman-on-a-keyboard.jpg?s=612x612&w=0&k=20&c=Z1nUpgbTH78D8JMqzosJD6lb90EVk54zkU941pdFAAo=" alt='icon-1'></img>
        </div>
        <div className='about-box'>
          <h2>Our Mission</h2>
          <span>Our mission is to empower businesses with innovative solutions that drive growth and efficiency. We are dedicated to delivering exceptional value through tailored strategies and cutting-edge tools.</span>
        <ul>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Partnerships</li>
        </ul>
        </div>
        </div>
      </div>
    <div className='blog' ref={blog}>
      <div className='prefinal-box'>
        <div className='myblog'>
        <h1>Blog Posts</h1>
        </div>
        <ul className='content-box'>
          <span class='blog-list'><h4>Maximizing Business Efficiency with Automation Tools</h4>By integrating automation tools, businesses can streamline workflows, cut down on manual tasks, and focus more on innovation and growth.</span>
          <span class='blog-list'><h4>Understanding Market Trends to Drive Strategic Decisions</h4>Analyzing market trends helps businesses identify opportunities, adapt to changes, and make informed decisions that drive long-term success.</span>
          <span class='blog-list'><h4>Importance of Customer-Centric Strategies for Business Growth</h4>Focusing on customer-centric strategies fosters loyalty, enhances satisfaction, and drives sustainable business growth through stronger relationships.</span>
        </ul>
      </div>
    </div>
      <div class='contact' ref={contact}>  
      <div className='fine'>
      <h1>Contact us</h1></div>
        <div className='final-box'>
          <div className='final'>
              <span class="fname">First Name: </span>
              <input type="text" id="fname" className='firstname'required></input>
              <span class="lname">Last Name: </span>
              <input type="text" id="lname" className='lastname'></input><br/>
              <span className="em">Email: </span>
              <input type="email" id="em" className='emailid' required></input><br/>
              <span className="sub">Subject: </span>
              <input type="text" id="subject" className='subject'></input><br/>
              <span className="mes">Message: </span>
              <input type="text" id="subject" className='message'></input>
              <a  className="atag" href='D:\\' type='submit'>SUBMIT</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Main;
