import React from "react";
import Santé from "../../Images/sante.png";
import Bébé from "../../Images/bébe.png";
import ImageMateriel from "../../Images/maeriel.png";
import { withRouter } from "react-router-dom";

const TopCategory = (props) => {
  return (
    <div>
      <div className="bg-container">
        <h1>Top Categories Of The Month</h1>
      </div>
      <div className="top-category-grid">
        <div className="bébé-maman">
          <img onClick={()=>props.history.push('/MotherBaby')} src={Bébé} alt="" />
        </div>
        <div className="Santé">
          <img src={Santé} alt="" />
        </div>
        <div className="Materiel-medical">
          <img onClick={()=>props.history.push("/Materielmedical")} src={ImageMateriel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default withRouter (TopCategory);
