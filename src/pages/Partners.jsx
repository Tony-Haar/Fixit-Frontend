import React from 'react'
import { partners } from '../assets/assets';

const Partners = () => {
  return (
    <div>
      <div className="partners-page py-5">
        {/* <section className="hero-section text-center py-5 bg-light">
          <h1>Our Trusted Partners</h1>
          <p className="lead">
            Collaborating with the best to bring you top-notch repair services.
          </p>
          <button className="btn btn-primary">Become a Partner</button>
        </section> */}

        <section className="partner-logos py-5">
          <div className="container">
            <div className="row justify-content-center">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="col-md-3 col-sm-4 col-6 text-center mb-4"
                >
                  <img
                    src={partner.image} 
                    alt={partner.name}
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                  <p className="mt-2">{partner.description}</p>
                 
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">What Our Partners Say</h2>
            <div className="row">
              {partners.map((partner) => (
                <div key={partner.id} className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">"{partner.description}"</p>
                      <footer className="blockquote-footer">
                        <cite>{partner.name}</cite>
                      </footer>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="cta-section text-center py-5">
          <h2>Join Our Network of Partners</h2>
          <p className="lead">
            Are you a brand or service provider interested in partnering with
            us?
          </p>
          <button className="btn btn-primary">Become a Partner</button>
        </section> */}
      </div>
    </div>
  );
}

export default Partners