import React from 'react';
import './App.css';

export const RecipientDashboard = () => {
  return (
    <div className="recipient-dashboard">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <p className="text-wrapper">Philippine Red Cross, Cebu Chapter</p>
          </div>
          <div className="div">
            <div className="navbar">
              <div className="logo">
                <p className="hospital">
                  <span className="span">Blood</span>
                  <span className="text-wrapper-2">&nbsp;</span>
                  <span className="text-wrapper-3">Count</span>
                </p>
                <div className="image-hero" alt="Image hero" src="blooddrop.png" />
              </div>
            </div>
            <div className="logo-2">
              <div className="icon-droplet">
                <div className="overlap-group-2">
                  <div className="ellipse" />
                  <div className="group" />
                </div>
              </div>
              <div className="polygon">
                <div className="img" alt="Polygon" src="polygon-1.svg" />
                <div className="polygon-2" alt="Polygon" src="polygon-2.svg" />
              </div>
            </div>
            <div className="rectangle" alt="Rectangle" src="rectangle-11.png" />
            <div className="image" alt="Image" src="image 5.png" />
            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <div className="search-for-hospitals">Search&nbsp;&nbsp;for Hospitals</div>
                <div className="vector" alt="Vector" src="vector.svg" />
              </div>
            </div>
            <div className="text-wrapper-4">Hospitals</div>
            <div className="chong-hua-hospital">Chong&nbsp;&nbsp;Hua Hospital Mandaue</div>
            <div className="rectangle-2" alt="Rectangle" src="rectangle-12.png" />
            <div className="vicente-sotto">
              Vicente Sotto Memorial Medical
              <br />
              Center(VSMMC)
            </div>
            <div className="nav">
              <div className="home">Home</div>
              <div className="text-wrapper-5">Available Donors</div>
            </div>
            <div className="text-wrapper-6">Cebu Doctors’ University Hospital</div>
          </div>
          <div className="subnational-blood-wrapper">
            <p className="subnational-blood">
              Subnational Blood <br />
              Center for Visayas
            </p>
          </div>
          <div className="vicente-sotto-wrapper">
            <p className="p">
              Vicente Sotto Memorial Medical
              <br />
              Center(VSMMC) Blood Services Unit
            </p>
          </div>
          <div className="text-wrapper-7">Blood Bank</div>
        </div>
      </div>
    </div>
  );
};

export default RecipientDashboard;
