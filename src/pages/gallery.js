import React from 'react';
import Footer from './footer';
import Header from './header';


class Gallery extends React.Component{
    render(){
        return(
            <div>
               
               <Header/>
<br></br>
<br></br>

<section id="gallery" className="gallery section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>
        <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid"  /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid"  /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid"  /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" /></a></div>
          </div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" /></a></div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>{/* End Gallery Section */}

<br></br>
<br></br>

<Footer/>


</div>
        );
    }
}

export default Gallery;