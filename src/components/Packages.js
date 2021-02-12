import Img1 from '../assets/images/1.png';
import Img2 from '../assets/images/2.png';
import Img3 from '../assets/images/3.png';

const Packages = () => {
  
	const template = `
    <div class="containerPackages">

     

      <div class="rightPackages">

      <div class="rightInner1Packages">
      <h1>Blooming<br> Bachelorette</h1>
      <img src=${Img1}></img>
      <h1>Officially a fiancé<br>Let’s get this party started!</h1>
      <p>Before a bachelorette blooms into the beautiful bride, a celebration must be had. A bachelorette party is a very special moment in every woman’s life. We celebrate the woman you were, and are becoming. It’s a coming together of your nearest and dearest to relax, let go of the pre-wedding stress and just have some FUN. Whether it’s champagne and massages, or a night out on the town, we can help your entourage make it a night to remember.</p>
      </div>
    
      <div class="rightInner2Packages">
      <h1>Queen<br> Protea</h1>
      <img src=${Img2}></img>
      <h1>You said YES!<br> Now where to begin?</h1>
      <p>The Queen Protea experience is one of our most sought after and extensive packages. This is for the couple who need our assistance from the word go. We’re talking setting budgets, creating invitations and navigating the fine art of table seating, right until we see that magnificent moment where you dance the night away as a married couple. From planning your special day and any events leading up to the day, to coordinating with third-party suppliers, as well as on the day coordination – rest comfortably knowing you’re in good hands.</p>
      </div>

      <div class="rightInner3Packages">
      <h1>Delicate<br> Daisy</h1>
      <img src=${Img3}></img>
      <h1>The A Team’s <br> very own support team</h1>
      <p>The Delicate Daisy experience is for the couple who are on it. Your wedding planning process is well underway, with your venue and service providers booked and ready to go. This is where we step in. We would meet a month before your wedding date for a complete hand-over, ensuring you and your fiancé can kick back, relax and enjoy the next month, as we smooth-sail right into your wedding day.</p>
      </div>

      </div>

      <div class="leftPackages">
        <h1>PACKAGES</h1>
      </div>
    </div>
  `;

	return template;
};

export default Packages;
