import React from "react";


function Resume(){
  return(
    <div id="resume-section">
    <h1 class="resume-heading">Resume</h1>
    <h2 class="resume-sub-heading">Education</h2>
    <div class="card text-center edu">
  <div class="card-header">
    2020-2024
  </div>
  <div class="card-body">
    <h5 class="card-title">Indian Institute of Information Technology Kota</h5>
    <p class="card-text">Bachelor of Technology (B.Tech)</p>
  </div>
  <div class="card-footer text-muted">
    ...
  </div>
</div>
<div class="card text-center edu">
<div class="card-header">
2018-2019
</div>
<div class="card-body">
<h5 class="card-title">Central Academy</h5>
<p class="card-text">Intermediate</p>
</div>
<div class="card-footer text-muted">
...
</div>
</div>

<h2 class="resume-sub-heading">Skills</h2>

<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item flex-fill">  C/C++ </li>
  <li class="list-group-item flex-fill">React.js</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item flex-fill">  HTML </li>
  <li class="list-group-item flex-fill">Node.js</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item flex-fill">CSS</li>
  <li class="list-group-item flex-fill">SQL</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item flex-fill"> JavaScript</li>
  <li class="list-group-item flex-fill">RESTful API</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <li class="list-group-item flex-fill">  MongoDB  </li>
  <li class="list-group-item flex-fill">Web3 DApp</li>
</ul>




    <h2 class="resume-sub-heading">Projects</h2>
    <div class="card mb-3 proj">
  <img src="images/ss.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">NFT Market Place (Decentralised App with React Front-End and Motoko Back-End)</h5>
    <p class="card-text">A Market Place for Minting NFT's(Non-Fungible Tokens) using my Personal Crypto Token. It Uses React as frontend with Motoko Backend. You can upload your Nft's and sell them for crypto Tokens.</p>
    <a href="#" class="btn btn-primary disabled">Github Project Link</a>
  </div>
</div>
<div class="card mb-3 proj">
<img src="images/ss1.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Keeper App (Notes Taking App) Using React</h5>
<p class="card-text">A note take taking Web App Developed using React Front-End</p>
<a href="https://github.com/Prasoon2050/Note-Keeper" class="btn btn-primary">Github Project Link</a>
</div>
</div>
<div class="card mb-3 proj">
<img src="images/ss2.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Daily Blog Website</h5>
<p class="card-text">A daily blog website with Node backend and MongoDB Database.It works on Ejs(Embedded JavaScript files)</p>
<a href="https://github.com/Prasoon2050/Blog-Website" class="btn btn-primary">Github Project Link</a>
</div>
</div>
    </div>
  );
}

export default Resume;
