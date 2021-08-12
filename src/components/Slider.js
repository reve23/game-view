import React from 'react'
import './slider.css'

const Slider = () => {
    return (
        <div className=" slider container-fluid my-2">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://bogku.com/wp-content/uploads/2017/07/Need-For-Speed-2015-Cover.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.player.one/sites/player.one/files/2021/01/15/outriders.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    <div className="carousel-item">
      <img src="https://gamingcentral.in/wp-content/uploads/2015/06/fifa_online_3-1920x1200-e1435646649321.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
         </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Slider
