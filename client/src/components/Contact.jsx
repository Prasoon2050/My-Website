import React, { useState, Component } from "react";
import axios from "axios";


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: '',
          text: 'Send Message'
        }
    }


    onNameChange(event) {
            this.setState({name: event.target.value})
        }

        onEmailChange(event) {
            this.setState({email: event.target.value})
        }

        onSubjectChange(event) {
            this.setState({subject: event.target.value})
        }

        onMsgChange(event) {
            this.setState({message: event.target.value})
        }

        submitEmail(e){
                e.preventDefault();
                axios({
                  method: "POST",
                  url:"/send",
                  data:  this.state
                }).then((response)=>{
                  if (response.data.status === 'success'){
                      console.log("Success")
                      this.resetForm()
                  }else if(response.data.status === 'fail'){
                      alert("Message failed to send.")
                  }
                })
        }

        resetForm(){
                this.setState({name: '', email: '',subject:'', message: ''})
        }

        changeText = (text) => {
          this.setState({ text });
        }


  render() {
    const { text } = this.state
    return (
      <div id="contact-content">

      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h1 class="heading-section resume-heading">Contact Me</h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
              <div class="wrapper">
                <div class="row justify-content-center">
                  <div class="col-lg-8 mb-5">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="dbox w-100 text-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa-stack fa-2x">
                              <i class="fa-solid fa-circle fa-stack-2x"></i>
                              <i class="fa-solid fa-map-marker fa-stack-1x fa-inverse"></i>
                            </span>
                          </div>
                          <div class="text">
                            <h6><span>Address:</span> </h6>
                            <h6>Lucknow, Uttar Pradesh</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 text-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa-stack fa-2x">
                              <i class="fa-solid fa-circle fa-stack-2x"></i>
                              <i class="fa-solid fa-phone fa-stack-1x fa-inverse"></i>
                            </span>
                          </div>
                          <div class="text">
                            <h6><span>Phone:</span></h6>
                            <h6>7905751620</h6>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="dbox w-100 text-center">
                          <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa-stack fa-2x">
                              <i class="fa-solid fa-circle fa-stack-2x"></i>
                              <i class="fa-solid fa-paper-plane fa-stack-1x fa-inverse"></i>
                            </span>
                          </div>
                          <div class="text">
                            <h6><span>Email:</span> prasoon2050@gmail.com</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="contact-wrap">
                      <h3 class="mb-4 text-center">Get in touch with me</h3>
                      <form method="POST" id="contactForm" name="contactForm" class="contactForm" onSubmit={this.submitEmail.bind(this)}>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="text" class="form-control" name="name" id="name" placeholder="Name" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="email" class="form-control" name="email" id="email" placeholder="Email" required value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <textarea name="message" class="form-control" id="message" cols="30" rows="8" placeholder="Message" required value={this.state.message} onChange= {this.onMsgChange.bind(this)}></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <button type="submit" class="btn btn-dark send" onClick={ () => { this.changeText("Message Sent")}}> {text} </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
  }
}
