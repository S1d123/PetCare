import React from 'react'
import feature_1 from "../Images/doctors.jpg";
import feature_2 from "../Images/medicine.jpg";
import feature_3 from "../Images/appointment.jpg";
import feature_4 from "../Images/food.jpg";
import feature_5 from "../Images/toys.jpg";
import feature_6 from "../Images/heart-health.jpg";

export default function features() {
  return (
    <>
  <h1 
    className="display-5 fw-bold"
    style={{
      textAlign: "center",
      fontFamily: "Open Sans",
      fontSize: 50,
    }}
  >
    Our Features.
  </h1>
  <hr className="dropdown-divider" style={{ borderTop: "2px solid black" }} /><br/>
  <div
    className="container1"
    style={{ marginLeft: 30, marginRight: 30, borderRadius: 20 }}>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div
        className="col"
        style={{ border: "2px solid black", marginRight: 10, borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_1} alt="doctors" />
          <div className="card-body">
            <h3>Veterinary Doctors</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
            </div>
          </div>
        </div>
      </div>
      <div
        className="col"
        style={{ border: "2px solid black", marginRight: 10, borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_2} alt="doctors" />
          <div className="card-body">
            <h3>Medicines</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col"
        style={{ border: "2px solid black", borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_4} alt="doctors" />
          <div className="card-body">
            <h3>Pet Shop</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                {/* <Link style={{ fontSize: 20, color: "black" }} to="/appointment">
                  View
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col"
        style={{ border: "2px solid black", borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_6} alt="doctors" />
          <div className="card-body">
            <h3>Health Tips.</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                {/* <Link style={{ fontSize: 20, color: "black" }} to="/healthTips">
                  View
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div
    className="container1"
    style={{ marginLeft: 30, marginRight: 30, borderRadius: 20 }}
  >
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div
        className="col"
        style={{ border: "2px solid black", marginRight: 10, borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_4} alt="doctors" />
          <div className="card-body">
            <h3>Premium Pet Foods.</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                {/* <Link style={{ fontSize: 20, color: "black" }} to="/petShop">
                  View
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col"
        style={{ border: "2px solid black", marginRight: 10, borderRadius: 20 }}
      >
        <br />
        <div className="card shadow-sm">
          <img src={feature_5} className="img-fluid" alt="doctors" />
          <br />
          <div className="card-body">
            <h3>Pet Toys and Accesories.</h3>
            <p
              className="card-text"
              style={{ fontFamily: "Times New Roman", fontSize: 20 }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                {/* <Link style={{ fontSize: 20, color: "black" }} to="/petShop">
                  View
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
                {/* <div
                    className="col"
                    style={{ border: "2px solid black", borderRadius: 20 }}
                >
                    <br />
                    <div className="card shadow-sm">
                    <img src={feature_6} alt="doctors" />
                    <div className="card-body">
                        <h3>Health Tips.</h3>
                        <p
                        className="card-text"
                        style={{ fontFamily: "Times New Roman", fontSize: 20 }}
                        >
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link style={{ fontSize: 20, color: "black" }} to="/healthTips">
                            View
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}
    </div>
  </div>
  <br />
</>
  )
}
