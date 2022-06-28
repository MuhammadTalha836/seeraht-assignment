import React from 'react'

export default function Contact() {
  return (
    <div className='pb-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Contact</h4>
            <hr />
            <h6>Lets get in touch and talk about your next project.</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">

            <form>
              <div class="my-3 ">
                <input type="text" class="form-control w-100" placeholder='Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder='Email' id="exampleInputPassword1" />
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" placeholder='Subject' id="exampleInputPassword1" />
              </div>

              <div class="mb-3">
                <input type="text" class="form-control" placeholder='Comments' id="exampleInputPassword1" />
              </div>

              

              <button type="submit" class="btn bg-dark text-white">SEND MESSAGE</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
