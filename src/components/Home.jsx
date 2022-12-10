import React from 'react'
import s from "./Home.module.css"
import { Carousel } from 'antd';

const contentStyle = {
    height: '642px',
    width:"290px",
    position:"relative",
    top:"-680px",
    rigth:"-20px",
    margin:"auto",
    borderRadius:"50px"
   
  };


const Home = () => {
  return (
    <div>
      
     <div className={s.firstBox} >
        <div>
            <h1 className={s.head} ><span>Best way to </span>manage your customers</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.</p>
            <div className={s.btnDiv}  >
                <button><img src="./appstore_blue.png" /></button>
                <button><img src='./googleplay_blue.png' /></button>
            </div>
            <div className={s.imgDiv} >
                <div  >
                    <img src="./used01.png" alt="#" /><img src="./used02.png" alt="#" /><img src="./used03.png" alt="#" /><img src="./used04.png" alt="#" />
                </div>
                <div className={s.p}  >
                <p> 12M+ </p>
                <p>Used this app</p>
                </div>
                
            </div>
        </div>
        <div className={s.frameDiv}>
            <div className={s.circle} ></div>
            <Carousel style={contentStyle} autoplay>
             <div className={s.screen}>
               <h3 >1</h3>
             </div>
             <div  className={s.screen} >
               <h3 >2</h3>
             </div>
            </Carousel>
           
           
            <img className={s.mobileFrame}  src='./mobile_frame_svg.svg' />
           

        </div>
        
     </div>         
     <div className={s.secBox} >
         <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  ><span>Trusted by</span> 150+ <span>companies</span></h1>
         <div style={{margin:"auto",width:"500px"}} >
           <p>Lorem Ipsum is simply dummy text of the printing and typese ttin indus orem Ipsum has beenthe standard dummy.</p>
         </div>
        <div className={s.secCourosel} >
        {/* <Carousel style={{width:"70%" ,margin:"auto"}}   autoplay> */}
         <div>
           <img src="./slack.png" />
         </div>
         <div>
         <img src="./shopboat.png" />
         </div>
         <div>
         <img src="./paypal.png" />
         </div>
         <div>
         <img src="./spoty.png" />
         </div>
         <div>
         <img src="./shopboat.png" />
         </div>
        {/* </Carousel> */}

        </div>
     </div>

     <div>
     <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  >Features <span>that makes app different!</span></h1>
     <div style={{margin:"auto",width:"500px"}} >
           <p>Lorem Ipsum is simply dummy text of the printing and typese ttin indus orem Ipsum has beenthe standard dummy.</p>
        </div>
     </div>
    
    <div className={s.thirdBox}  >
      <div>
        <div >
            <img   src="./shield_icon.png" />
            <h2>Secure data</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
        </div>
        <div>
        <img   src="./shield_icon.png" />
            <h2>Secure data</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
        </div>
      </div>
      <div style={{width:"unset"}}><img className={s.features_frame}  src='./features_frame.png' /></div>
      <div>
      <div style={{textAlign:"left"}} >
            <img   src="./shield_icon.png" />
            <h2>Secure data</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
        </div>
        <div style={{textAlign:"left"}} >
        <img   src="./shield_icon.png" />
            <h2>Secure data</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and type setting indus ideas.</p>
        </div>
      </div>
    </div>

    <div className={s.fourthBox} >

        <div>
            <img src='./about-frame.png'  />
            <img style={{position:"relative",top:"-450px" ,right:"-150px"}}  src='./about-screen.png'  />
        </div>
        <div>
           <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  ><span>Some awesome words </span>about app.</h1>
           <div style={{margin:"auto",width:"500px"}} >
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet..</p>
           </div>
           <div className={s.grid} >
              <button><h1><span>17M+</span></h1></button>
              <button><h1><span>8M+</span></h1></button>
              <button><h1><span>2300M+</span></h1></button>
              <button><h1><span>M+</span></h1></button>
           </div>
           <button style={{marginTop:"150px"}} className={s.getStarted}  >START FREE TRIAL</button>
        </div>

       
    
    </div> 
    
    <div className={s.fifthBox} >
        <div>
             <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  ><span>Beautiful design with</span> modern UI</h1>
             <div style={{margin:"auto",width:"500px"}} >
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and.</p>
             </div>
            <div style={{display:"flex" ,justifyContent:"space-between",gap:"30px",width:"555px"}}  >
                <div className={s.bullet}  ></div>
                <div>
                    <h2>Carefully designed</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.</p>
                </div>
            </div>
            <div style={{display:"flex" ,justifyContent:"space-between",gap:"30px",width:"555px"}}  >
                <div className={s.bullet}  ></div>
                <div>
                    <h2>Carefully designed</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.</p>
                </div>
            </div>
            <div style={{display:"flex" ,justifyContent:"space-between",gap:"30px",width:"555px"}}  >
                <div className={s.bullet}  ></div>
                <div>
                    <h2>Carefully designed</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and type esetting industry lorem Ipsum has.</p>
                </div>
            </div>
        </div>
        <div >
            <img   src='./modern01.png' />
            <img  style={{position:"relative" ,top:"-400px" , right:"-250px" }}  src='./modern02.png' />
            <img  style={{position:"relative" ,top:"-290px" , right:"50px" }}  src='./modern03.png' />
        </div>
    </div>

    <div>
            <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  >How it works<span>- 3 easy steps</span> </h1>
             <div style={{margin:"auto",width:"500px"}} >
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been .</p>
             </div>
    </div>

    <div className={s.sixthBox}>
       <div className={s.innerDiv}  >
             <div>
                <h2>Download app</h2>
                <p>Download App either for Windows, Mac or Android</p>
             </div>
             <div> <img src='./create_account.jpg' /></div>
             <div>
                <h2>It’s done, enjoy the app</h2>
                <p>Have any questions check our FAQs
Get most amazing app experience,Explore and share the app</p>
             </div>
       </div>

        <div className={s.line} style={{width:"5px;"}} > <img  src="./icon_bg.png" alt="#" /><img   style={{top:"150px"}} src="./icon_bg.png" alt="#" /><img  style={{top:"300px"}}   src="./icon_bg.png" alt="#" />  </div>

       <div className={s.innerDiv} >
             <div>
             <img src='./download_app.jpg' />
             </div>
             <div style={{textAlign:"left"}} >
                <h2>Create account</h2>
                <p>14 days free trial
Sign up free for App account. One account for all devices.</p>
             </div>
             <div>
             <img src='./enjoy_app.jpg' />
             </div>
       </div>
    </div>


    <div>

        <iframe style={{height:"400px" ,width:"1170px" ,marginTop:"100px" }}  src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/yt_thumb.png'  />
    </div>

    <div>
    <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750"}}  > <span>What our </span> customer say </h1>
             <div style={{margin:"auto",width:"500px"}} >
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been .</p>
             </div>
    </div>
     
     <div>
    
       <div>
        {/* <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /> */}
       </div>
       <div>
       <Carousel style={{height:"400px",width:"600px",margin:"auto",marginTop:"50px"}}  autoplay>
       <div className={s.a} >
        
       </div>
       <div className={s.b} >
      
       </div>
       <div className={s.c} >
      
       </div>
    
       </Carousel>
       </div>
       <div>
        {/* <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /> */}
       </div>
       
     </div>
     <div>
     <h1 style={{fontSize:"45px" ,color:"#6A49F2",fontWeight:"750",marginTop:"200px"}}  ><span>Best & simple </span> pricing</h1>
             <div style={{margin:"auto",width:"500px"}} >
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been .</p>
             </div>
     </div>

    </div>
  )
}

export default Home