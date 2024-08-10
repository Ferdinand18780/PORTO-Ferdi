import Navbar from "./component/page.js";
import "./home.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        <section id="home">
          <div className='container-desc'>
            <div>
              <img className="profil" src="/Foto.jpg" alt="Foto Profil" />
            </div>
            <div className="container-info">
              <div style={{ fontSize: '14px', color: '#777', margin: '0' }}>Hello I'm</div>
              <div style={{ fontSize: '26px', fontWeight: 'bold', margin: '10px 0' }}>Ferdinand Gabe Tua Sinaga</div>
              <div style={{ fontSize: '16px', margin: '0' }}>Teknik Informatika - Ganesha</div>
              <div style={{ fontSize: '16px', margin: '0' }}>Frontend Enthusiast</div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container-about">
            <div style={{fontSize: '30px' ,fontWeight: '700'}}>About Me</div>
            <div className="container-text-about-graph">
              <img className='graph' src="/about.png"/>
              <div className="line"></div>
              <div>
                <div className='container-graph'>
                  <img  className='about-graph' src="/web-dev.png"/>
                  <img  className='about-graph' src="/fast-learner.png"/>
                  <img  className='about-graph' src="/maskot.png"/>
                </div>
                <div className="deskripsi">
                  Saya adalah seorang mahasiswa di ITB yang memiliki minat besar dalam web development, khususnya di bidang front end. Ketertarikan saya terhadap front end muncul dari keinginan untuk menciptakan antarmuka pengguna yang menarik dan fungsional. Saya merasa senang ketika dapat mengubah ide-ide menjadi tampilan yang dapat diakses dan dinikmati oleh pengguna.
                  Selain itu, saya dikenal sebagai seseorang yang memiliki kemampuan belajar yang cepat. Dalam setiap proyek atau tantangan baru, saya selalu bersemangat untuk mempelajari teknologi dan alat-alat baru yang dapat meningkatkan kemampuan saya dalam mengembangkan situs web.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience">
          <div className="container-about">
            <div style={{fontSize: '30px' ,fontWeight: '700'}}>Experience</div>
            <div className="con">
              <div className="container-experience">
                <img  className='about-graph' src="/kalkulator.png"/>
                <p>Making Calculator</p>
              </div>
              <div className="container-experience">
                <img  className='about-graph' src="/download.png"/>
                <p>Youtube clone (display only)</p>
              </div>
              <div className="container-experience">
                <img  className='about-graph' src="/KSEP.png"/>
                <p>Web Dev Internship in KSEP</p>
              </div>
            </div>
          </div>
        </section>
        <section id="skill" style={{marginBottom: '100px'}}>
          <div className="container-skill">
            <div style={{fontSize: '30px' ,fontWeight: '700'}}>Skill</div>
            <div style={{marginTop:'50px'}}>
              <div className='container-skill-graph'>
                <img  className='about-graph' src="/python.png"/>
                <img  className='about-graph' src="/HTML.png"/>
                <img  className='about-graph' src="/js.png"/>
              </div>
              <div className='container-skill-graph'>
                <img  className='about-graph' src="/next.svg"/>
                <img  className='about-graph' src="/CSS.png"/>
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
              <img className="graph-contact" src="github.png"/>
              <div>Ferdinand18780</div>
            </div>
          </div>
          <div style={{color: '#777', marginBottom:'30px'}}> Copyright © 2023 Ferdinand Gabe Tua Sinaga. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
