import React from 'react'

const Comment = () => {
  return (
    <section id="testimonials">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-md-12">
          <h3 className="section-title">Our Customers</h3>
          <div className="section-title-divider"></div>
          <p className="section-description">Erdo lide, nora porodo filece, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="profile">
            <div className="pic cus-1"></div>
            <h4>Saul Goodman</h4>
            <span>Lawless Inc</span>
          </div>
        </div>
        <div className="col-md-9">
          <div className="quote">
            <b className='left-quote'></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small className='right-quote'></small>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-9">
          <div className="quote">
            <b className='left-quote'></b> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae. <small className='right-quote'></small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="profile">
            <div className="pic cus-2"></div>
            <h4>Sara Wilsson</h4>
            <span>Odeo Inc</span>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Comment
