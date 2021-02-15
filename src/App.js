import React from 'react'
import './App.css'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import 'rsuite/dist/styles/rsuite-dark.css';
import { PanelGroup,Panel,Navbar,Nav,Icon,  Button, IconButton, ButtonToolbar ,Timeline } from 'rsuite';
import Card from './Card';
import CardTwo from './CardTwo';
import CardTri from './CardTri';
import Self from './Self';
import mars from './image/mars.png';
import uranus from './image/uranus.png';
import roket from './image/roket.png';
import bc2 from './image/bc2.png';
import bc22 from './image/bc22.png';
import bc4 from './image/bc4.png';


// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const NavBarInstance = ({ onSelect, activeKey ,onClik, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Header>
       
      </Navbar.Header>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item eventKey="1" icon={<Icon icon="home" onClick={() => onClik(0)} />}>Home</Nav.Item>
          <Nav.Item eventKey="2"  onClick={() => onClik(1)}>About</Nav.Item>
          <Nav.Item eventKey="3"  onClick={() => onClik(2)}>Project</Nav.Item>
          <Nav.Item eventKey="4"  onClick={() => onClik(3)}>Appreciation</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};


const Biodata = () =>{
 return(
    <PanelGroup accordion bordered>
    <Panel header="Nickname " eventKey={1}>
    <p class="textBio">Ihksan</p>
    </Panel>
    <Panel header="Nama Lengkap" eventKey={2}>
    <p class="textBio">Ikhsan Setiawan</p>
    </Panel>
    <Panel header="Tempat Tanggal Lahir  " eventKey={3}>
    <p class="textBio">Bandung 28 Mei 2000</p>
    </Panel>
    <Panel header="Umur" eventKey={4}>
    <p class="textBio">20 Tahun</p>
    </Panel>
    <Panel header="Agama" eventKey={5}>
    <p class="textBio">Islam</p>
    </Panel>
  </PanelGroup>
);
}
const Prestasi=() =>{
  return (
    <div class="viewPrestasi">
    <Timeline className="custom-timeline">
      <Timeline.Item dot={<Icon icon="trophy" size="2x" 
                  style={{ background: '#eb5056', color: '#fff' }}
                  />}>
        <p class="textPrestasi">09 Desember 2020</p>
        <p class="textPrestasiDes">Lolos Aplikasi Buah hatiku - Kemenparekraf nyatakan.id</p>
      </Timeline.Item>
     <Timeline.Item dot={<Icon icon="book" size="2x" 
                 style={{ background: '#06c0d7', color: '#fff' }}
                 />}>
        <p  class="textPrestasi">03 Desember 2020</p>
        <p class="textPrestasiDes">Certificate of Completion Course CI/CD for React Native</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="book" size="2x"
                  style={{ background: '#06c0d7', color: '#fff' }}
                  />}>
      <p  class="textPrestasi">23 Agustus 2020</p>
        <p class="textPrestasiDes">Certificate of Completion Course React Native</p>
        </Timeline.Item>
      <Timeline.Item dot={<Icon icon="user" size="2x" 
                  style={{ background: '#06c0d7', color: '#fff' }}
                  />}>
        <p  class="textPrestasi">20 Oktober 2019</p>
        <p class="textPrestasiDes">Wakil Ketua Pelaksana LKMM-TD Polban</p>
      </Timeline.Item>
      <Timeline.Item dot={<Icon icon="camera" size="2x" 
                  style={{ background: '#06c0d7', color: '#fff' }}
                  />}>
        <p  class="textPrestasi">27 Mei 2019</p>
        <p class="textPrestasiDes">Ketua Koordinator Lomba Fotografi Polban</p>
      </Timeline.Item>
      <Timeline.Item 
      dot={<Icon icon="gamepad" size="2x"  
                 style={{ background: '#06c0d7', color: '#fff' }}
/>}>
        <p class="textPrestasi">27 Mei 2019</p>
        <p class="textPrestasiDes">Ketua Koordinator Turnamen E-Sport PES</p>
      </Timeline.Item>
    </Timeline>
    </div>
  );
} 
const BlackHole = ()=>{
  return(
<div class="box">
  
</div>
  )
}

const NavHover = () =>{
  return(

    <ButtonToolbar>
    
   
  <div class ="viewNavCov">
    <div class = "icon">
      <svg height = "80" width="80">
        <circle cx="40" cy="40" r="30" stroke="white" stroke-width="4" fill="none"></circle>
      </svg>
      <i class="fab fa-instagram fa-2x">  <a href="https://instagram.com/ihksans/">     <Icon icon="instagram" style={{size:'20%'}} /> 
      </a></i>
    </div>
    <div class = "icon">
      <svg height = "80" width="80">
        <circle cx="40" cy="40" r="30" stroke="white" stroke-width="4" fill="none"></circle>
      </svg>
      <i class="fab fa-facebook fa-2x">    <a href="https://web.facebook.com/ikhsan.setiawan.3975012">    <Icon icon="facebook-official"  style={{size:'20%'}}/> 
    </a></i>
    </div>
    <div class = "icon">
      <svg height = "80" width="80">
        <circle cx="40" cy="40" r="30" stroke="white" stroke-width="4" fill="none"></circle>
      </svg>
      <i class="fab fa-whatsapp fa-2x" > <a href="https://api.whatsapp.com/send?phone=628886289639">     <Icon icon="whatsapp" style={{size:'20%'}} /> 
      </a></i>
    </div>
    <div class = "icon">
      <svg height = "80" width="80">
        <circle cx="40" cy="40" r="30" stroke="white" stroke-width="4" fill="none"></circle>
      </svg>
      <a href="https://www.linkedin.com/in/ikhsan-setiawan-904a731a4/"><i class="fab fa-twitter fa-2x">      <Icon icon="linkedin" style={{size:'20%'} } /> </i></a>
    </div>
  </div> </ButtonToolbar>);
}
class App extends React.Component {
  constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
          activeKey: null
        };
      }
      handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }
  render() {
    const { activeKey } = this.state;
    return (
      //       <div className="nav-wrapper">
       
//       </div>
      <Parallax ref={ref => (this.parallax = ref)} pages={5}>
         <NavBarInstance appearance="subtle" activeKey={activeKey} onSelect={this.handleSelect} onClik={(n)=>this.parallax.scrollTo(n)}/>
        {/* background color */}
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />  {/*//layer1 */}
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#710193' }} />  {/*//layer2 */}
          <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#87BCDE' }} />  

           {/*//layer3 */}
        {/* background color */}
        
        {/* image content layer1 */}
        <ParallaxLayer offset={0} speed={-0.3} style={{ pointerEvents: 'none' }}> 
        <div class="mars">
        <img src={mars} style={{ width: '20%', marginLeft: '2%', marginTop:'7%' }} />
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} style={{ pointerEvents: 'none' }}>
       <div class="uranus">
       <img src={uranus} style={{ width: '40%', marginLeft: '40%', marginTop:'25%' }} />
       </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <div class="roket">
        <img src={roket} style={{ width: '30%', marginLeft: '5%', marginTop:'30%' }} />
        </div>
        <BlackHole/>
        </ParallaxLayer>
        {/* image content layer1 */}



        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
      

        {/* <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        />
        
       
         <ParallaxLayer offset={3} speed={-0.3} style={{ pointerEvents: 'none' }}>
        <img src={bc2} style={{ width: '100%',height:'100%'}} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.4} >
          <img src={bc22} style={{ display: 'block', width: '100%' ,height:'40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.4} >
          <img src={bc4} style={{ display: 'block', width: '100%',height:'90%' }} />
        </ParallaxLayer>
{/* //layer 1// */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', marginTop:'5%',marginLeft:'5%',justifyContent: 'center' }}>
          <div class="viewWelcome">
              <p class="textHeader1">Hallo Semua</p>
              <p class="textHeader1">Aku Ihksan dan ini adalah Blog ku</p>
              <h4 class="textHeader3">Junior Front End Developer</h4>
              <Button  onClick={() => this.parallax.scrollTo(1)} color="blue" appearance="ghost" style={{marginTop:'5%',alignSelf:'center'}}>
                Let me intoduce my self
              </Button>
              <NavHover/>
              </div>
        </ParallaxLayer>
                  

       {/* //layer 2// */}
       <ParallaxLayer
          offset={0.98}
          speed={0.1}
          style={{ display: 'flex', marginTop:'5%', justifyContent: 'center', }}>
         
        <p class="textHeaderProject">About Me</p>
        
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.1}
          speed={0.1}
>            
          <div>
             
              <div class='flex-container'>
                <div class="menu">       
                    <Biodata/>
                  </div>
                  <div class="textBio2">
                    <Self/>
                    <div class="viewTextBio">
                      <p class="textBiografi">Sebelumnya saya ucapkan terimakasih telah berkunjung di blog saya. Izinkan saya memperkenalkan diri. Yooo!! perkenalkan nama saya Ikhsan Setiawan. Nama panggilan ihksan. Terkadang orang orang salah menuliskan nama saya, karena selalu dibalik huruf "h" dan "k", hehehe maap ya gais. Saya lahir di Bandung, namun rumah asli saya di Tegal Jawa Tengah. Saya sangat suka belajar hal baru terutama yang berkaitan dengan coding, walau tidak jago jago amat hehehe</p>
                    </div>
                    <div class="viewFooterBio"  >    
                    <ButtonToolbar >
                      <IconButton  onClick={() => this.parallax.scrollTo(0)} color="red" icon={<Icon icon="arrow-left" />} placement="left" >
                        Back
                      </IconButton><IconButton  onClick={() => this.parallax.scrollTo(2)} color="blue"icon={<Icon icon="arrow-right" />} placement="right" >
                        Next
                      </IconButton>
                    </ButtonToolbar></div>  
                    
                </div>
                
              </div>
              
           
          </div>
        </ParallaxLayer>
       
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', marginTop:'5%', justifyContent: 'center', }}>
         
        <p class="textHeaderProject">Project Experiance</p>

        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
          onClick={() => this.parallax.scrollTo(3)}>
        <Card/>
        <CardTwo/>
        <CardTri/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.8}
          speed={-0}
          style={{ display: 'flex', marginTop:'2%', justifyContent: 'center', }}>
         <div>
          <p class="footerPro">Seken.jtk.polban.ac.id (Backend) - Buah Hatiku (Fullstack) - Under The Sea (Team Dev & Leader)</p>
        </div>
        </ParallaxLayer>
      
        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{ display: 'flex', justifyContent: 'center', }}>
        <p class="textHeaderProject">APPRECIATION</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyItems: 'center'}}
          >   
          <Prestasi/>    
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.35}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', }}
         >   
         {/* <div class="viewFooterPres">  */}
          <ButtonToolbar >
              <IconButton  onClick={() => this.parallax.scrollTo(0)} color="red" style={{  }}icon={<Icon icon="arrow-left" />} placement="left" >
                Up we go
              </IconButton>
          </ButtonToolbar>
          {/* </div>    */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyItems: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
       
        </ParallaxLayer>
      </Parallax>
    )
  }
}
export default App;
