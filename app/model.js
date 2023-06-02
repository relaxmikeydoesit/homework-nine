var MODEL = (function () {
  var _homeContent = `<div class="header-home">
  <div class="logo-home"></div>
  <div class="head-content-home"></div>
  </div>  
  <div class="home-wrapper">
  <div class="left">
  <p>Welcome to my portfolio! I am thrilled to showcase my creative journey and professional accomplishments. As a web developer, I have honed my skills in creating visually captivating designs that leave a lasting impression. From elegant branding solutions to custom solutions, I strive to bring a unique and fresh perspective to every project.</p>
  <p>I built this website as a sample of my capabilities in order to apply for an internship with a local tech company. You will find examples of some social posts I was responsible for on "works". A small sampling of the over fifty works created with Canva will also be linked and available.</p>
  <p>This website is also being submitted as assignment "Homework-Nine" in NEWM-N-215. This website was built to the specifications of the assignment, and customized to fit the needs inherent for real-world usage and submission.</p>
  <p>This website is contructed utilizing the Model-View-Controller design pattern. All content is loaded to the page when you click on a link by using the MVC model and jQuery. Entire website is brought in on a single page. Each page is has a proper layout, utilizing images, paragraphs, and the website is responsive to the width of the viewport.</p>
  <p>Let me know what you think! Feedback is always appreciated. For more information, see the page "contact".</p>
  </div>
  <div class="right">
  </div>
  </div>
  
  <div class="footer-index">
  <p>©2023 relaxmikeydoesit.xyz  ||
   All Rights Reserved. <br>
  Made with ❤ in Indianapolis</p>
  </div>`;
  var _resumeContent = `<div class="header-resume">
  <div class="logo-resume">   
  </div>
  <div class="head-content-resume"></div>
</div>
<div class="wrapper-resume">

<div class="resume">
</div>
<div class="side-panel">
  <h3>THE REST OF THE STORY</h3>
  
  <p>I am licensed by the Department of Insurance on the following lines of authority: Personal Lines and Accident and Health.</p>
  <p>From 2020-2022, I provided pre-sales support for Samsung's North American online store. I specialized in mobile devices and home appliances.</p>   
  <p>Since 2004, I have been a regular speaker at fundraising events for the Indiana University Dance Marathon. I was very fortunate to be able to grow up with a diverse, selfless, passionate group of IU students.</p>
  <p>What began as an invitation to share about my experience as a patient at Riley Hospital for Children soon grew into a tradition. Throughout my involvement, I worked closely with the Special Events committee, assisting in the planning and execution of the annual gala, which is the central fundraising event of the year.</p>
  <p>I have been a pet care provider for the last five years, operating as Smilin' Pup Pet Services. (I will always prefer dogs to humans, but I believe I'll be able to provide a better life for my dog as a web developer.) In October 2014, I founded and operated a now-defunct online dating community. Within the first year, the community grew to over 1,000 members. (Most of the members discovered the site through my utilization of targeted ads on Google.)</p>
</div>

</div>
<div class="footer-resume">
  <p>©2023 relaxmikeydoesit.xyz  ||
       All Rights Reserved. <br>
      Made with ❤ in Indianapolis</p>
  </div>`;
  var _worksContent = `<div class="works-wrapper">
      <div class="top-post">
      </div>
        </div>
        <div class="dfw-intro">
          
          <div class="overlay">
          <h1>SKY'S THE LIMIT</h1>
          <p> Following MoviePass, I was assigned to the <br> innaugural team handling customer service, <br> digital engagement, and content planning for the <br> Dallas/Fort-Worth International Airport.</p>
          <p>A few more of my favorite planned posts are below. <br>
             (I even had the honor of announcing the renovation of Whattaburger!!)</p>
            </div>
        </div>
        <div class="works-middle-wrapper">

      <img src="images/post1-crop.JPG" alt="">
      <img src="images/post2.JPG" alt="">
      <img src="images/post3-crop.JPG" alt="">
      <img src="images/post5-crop.JPG" alt="">
      <img src="images/post4-crop.JPG" alt="">

      </div>
    
      <footer>
        <div class="logo"></div>
        <div class="copy"> <p>&copy;2023 relaxmikeydoesit.xyz  <br>  All Rights Reserved. <br> Made with &#10084; in Indianapolis</p></div>   
        <div class="social"><a href="https://www.linkedin.com/in/michael-patrick-lee/"><img src="images/LinkedIn_logo_initials.png" alt="LinkedIn"></a></div>
      </footer>`;
  var _contactContent = ` <div class="header">
  <div class="logo-contact">   
  </div>
  <div class="head-content-contact"></div>
</div>
<div class="top"><p>Keep In Touch</p></div>
<div class="content">
<div class="left">
  <p>Email hours are weekdays from 12pm-2pm. Both of the following inboxes are checked during those hours. I can be reached at <a href="mailto:leemike@iu.edu">my university email,</a> as well as <a href="mailto:mikeydoesittech@gmail.com">my Gmail address.</a></p>
  <p>You're also able to leave a message on my cell phone, or text me for any urgent contact. My number is 317-766-8755.</p>
  <p>My phone is silenced while I am working. Texts generally will come through to my desktop. Please leave non-urgent messages on my voicemail, and I will return your call shortly.</p>
  <p>Links to my Github and Canva work can be provided, if requested. (The header logos and content were made in Canva.)</p>
  <p>General Notice about Payments:  $149 due at contract signing to start project, balance due no-later-than 72 hours prior to launch.</p>    
</div>
<div class="right"></div>
</div>
  

</div>
<div class="footer-contact">
  <p>©2023 relaxmikeydoesit.xyz  ||
       All Rights Reserved. <br>
      Made with ❤ in Indianapolis</p>
  </div>`;

  var _updateView = function (pageName) {
console.log("MODEL " + pageName);
var pageContent = "_" + pageName;
$("#app").html(eval (pageContent));  
}
    return {
        updateView : _updateView,
    };
})();