import {CDN_URL} from "./utilis/constant";
const Restrauntcard = (props) => {
    const { resdata } = props; 
    return ( 
      <div className="res-card">
        <div className="img-container">
          <img className="resImage"
            src={
              CDN_URL +
              resdata.info.cloudinaryImageId
            }
            width="150" 
          />
        </div>
        <h2 className="resturantName">{resdata.info.name}</h2>
        <div>
          {resdata.info.avgRating} , {resdata.info.sla.slaString}
        </div>
        <div className="cusine">{resdata.info.cuisines}</div>
        <div className="address">{resdata.info.locality}</div>
      </div>
    );  
  };
   export default Restrauntcard;