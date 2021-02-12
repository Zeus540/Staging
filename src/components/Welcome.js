import Img1 from '../assets/images/g1.jpg';
import Img2 from '../assets/images/g3.jpg';
import Img3 from '../assets/images/babyshower.jpg';
import Img4 from '../assets/images/graduation.jpg';
import Img5 from '../assets/images/proposal.jpg';

const Welcome = () => {
  
	const template = `
    <div class="containerSection1">

      <div class="left">
        <div>
        <h1>
        EVENTS </h1>
    
        </div>
      </div>

      <div class="right">

      <div class="rightInner1">
      <h1>
      Engagements</h1>
      <div class="imgHolder">
      <img src=${Img2}></img>
     <a href="../../public/gallery.html"></a>
      </div>
     
      
 
      </div>

   
      <div class="rightInner3">
      <h1>
      BIRTHDAYS </h1>
      <div class="imgHolder">
      <img src=${Img1}></img>
      </div>
      </div>

      <div class="rightInner4">
      <h1>
      BABY SHOWERS </h1>
      <div class="imgHolder">
      <img src=${Img3}></img>
      </div>
      </div>

      <div class="rightInner5">
      <h1>
      Graduation Celebrations </h1>
      <div class="imgHolder">
      <img src=${Img4}></img>
      </div>
      </div>

      <div class="rightInner6">
      <h1>
      Proposals & Engagements</h1>
      <div class="imgHolder">
      <img src=${Img5}></img>
      </div>
      </div>
      </div>

    </div>
  `;

	return template;
};

export default Welcome;
