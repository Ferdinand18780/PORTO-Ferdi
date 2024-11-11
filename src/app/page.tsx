import Navbar from "./component/page.js";
import "./home.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white" >
      <Navbar/>
      <div>
        <section id="home">
          <div className='container-desc'>
            <div>
              <img className="profil" src="/Foto.jpg" alt="Foto Profil" />
            </div>
            <div className="container-info">
              <div className="gradient-text">Hello I'm</div>
              <div className="gradient-text-Nama">Ferdinand Gabe Tua Sinaga</div>
              <div className="desc">
                I am a student at ITB with a strong interest in web development, particularly in front-end. My passion for front-end stems from a desire to create engaging and functional user interfaces. I enjoy bringing ideas to life in a way that users can access and appreciate. Known for my quick learning ability, I am always excited to explore new technologies and tools that enhance my web development skills.
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="container-about">
            <div style={{fontSize: '30px' ,fontWeight: '700'}}>Experience</div>
            <div className="con">
              <div className="container-experience">
                <img  className='about-graph' src="/resize-button.svg"/>
                <p className="text-black">Image Resizer</p>
              </div>
              <div className="container-experience">
                <img  className='about-graph' src="/download.png"/>
                <p className="text-black">Youtube clone (display only)</p>
              </div>
              <div className="container-experience">
                <img  className='about-graph' src="/KSEP.png"/>
                <p className="text-black">Web Dev Internship in KSEP</p>
              </div>
              <div className="container-experience">
                <img  className='about-graph' src="/swastamita.png"/>
                <p className="text-black">Swastamita App</p>
              </div>
            </div>
          </div>
        </section>
        <section id="techstack" style={{marginBottom: '100px'}}>
          <div className="container-skill">
            <div style={{fontSize: '30px' ,fontWeight: '700'}}>Tech Stack</div>
            <div style={{marginTop:'50px'}}>
              <div className="slider">
                <div className="slider-track">
                  <img src="python.png" className="logo"/>
                  <img src="js.png" className="logo"/>
                  <img src="HTML.png" className="logo"/>
                  <img src="CSS.png" className="logo"/>
                  <img src="nextjs-icon-dark-background.png" className="logo"/>
                  <img src="tailwind.png" className="logo"/>
                  <img src="java.png" className="logo"/>
                  <img src="python.png" className="logo"/>
                  <img src="js.png" className="logo"/>
                  <img src="HTML.png" className="logo"/>
                  <img src="CSS.png" className="logo"/>
                  <img src="nextjs-icon-dark-background.png" className="logo"/>
                  <img src="tailwind.png" className="logo"/>
                  <img src="java.png" className="logo"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-contact">
          <div style={{fontSize: '30px' ,fontWeight: '700'}}>My Contact</div>
          <div className="container-info-contact">
            <div style={{display: 'flex', flexDirection:'row', columnGap:'4px'}}>
              <img className="graph-contact" src="email.png"/>
              <div>ferdinandgts5@gmail.com</div>
            </div>
            <div style={{display: 'flex', flexDirection:'row', columnGap:'4px'}}>
              <img className="graph-contact" src="linkedin.png"/>
              <div>Ferdinand Gabe Tua Sinaga</div>
            </div>
          </div>
          <div style={{color: '#777', marginBottom:'30px'}}> Copyright © 2023 Ferdinand Gabe Tua Sinaga. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
