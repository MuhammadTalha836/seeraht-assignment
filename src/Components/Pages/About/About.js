import React from 'react'

export default function About() {
  return (
    <div className='py-3'>
      <div className="container">
        <div className="row">
          <div className="col ">
            <h4> About </h4>
            <hr />
            <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12 col-md-6  col-lg-3 mb-3">
            <div class="card w-18rem" >
              <img src="https://www.w3schools.com/w3images/team2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3">John Doe</h5>
                <h6>CEO & Founder</h6>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum</p>
                <a href="#" class="btn bg-secondary w-100 text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div class="card w-18rem" >
              <img src="https://www.w3schools.com/w3images/team1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3">Jane Doe</h5>
                <h6>Architect</h6>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum</p>
                <a href="#" class="btn bg-secondary w-100 text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div class="card w-18rem" >
              <img src="https://www.w3schools.com/w3images/team3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3">Mike Ross</h5>
                <h6>Architect</h6>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum</p>
                <a href="#" class="btn bg-secondary w-100 text-white">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ">
            <div class="card w-18rem" >
              <img src="https://www.w3schools.com/w3images/team4.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title mb-3">Dan Star</h5>
                <h6>Architect</h6>
                <p class="card-text">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum</p>
                <a href="#" class="btn bg-secondary w-100 text-white">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
