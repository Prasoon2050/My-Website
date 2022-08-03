import React from "react";


function Body(){
  return(
    <section class="container-fluid " id="grid">
      <div class="row grid-container">
        <div class="col-lg-5 grid-child">
          <div class="card-bio">
            <img src="images/1234.jpg" alt="No image" class="personal-img"/>
            <h2>Prasoon</h2>
            <h2>Kumar</h2>
            <p>Web Developer</p>
            <div class="container-fluid social">
            <a href="https://www.facebook.com/profile.php?id=100008297775167" class="social-icon fab fa-facebook-f my"></a>
            <a href="https://twitter.com/Prasoon__K" class="social-icon fab fa-twitter my"></a>
            <a href="https://www.instagram.com/prasoon__kr/" class="social-icon fab fa-instagram my"></a>
            <a href="https://www.linkedin.com/in/prasoon-kr/" class="fa-brands fab fa-linkedin my"></a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 grid-child-second container-fluid">
          <h1>Hello</h1>
          <h3>Here's who I am & what I do</h3>
          <p></p>
          <a href="files/resume.pdf" class="btn btn-primary" tabindex="-1" role="button" download="My-resume.pdf">Resume</a>
          <p></p>
          <p></p>
          <p class="intro">I am a full stack web developer currently a 3rd year undergraduate at Indian Institute of Information Technology, Kota with a major of computer science and engineering.</p>
          <p class="intro">This is my personal website. Feel free to send a message from contact page. Click on the resume button to download my resume.</p>
        </div>
      </div>
    </section>
  );
}

export default Body;
