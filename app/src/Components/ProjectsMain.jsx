import React from "react";
import "../CSS/projectsmain.css";
import { useNavigate } from "react-router-dom";
import spaceChefsThumb from "../Resources/SpaceChefs/Thumbnail.jpg";
import humanityThumb from "../Resources/HumanityLastGrasp/Thumbnail.png";
import tongeTiedThumb from "../Resources/TongeTied/Thumbnail.png";

function ProjectsMain() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="text-center items-center pt-8">
        <div class="container">
          <div
            class="card"
            onClick={() => navigate("/projects/humanity-last-grasp")}
          >
            <img src={humanityThumb} alt="Humany last grasp" />
            <div class="card__head">Humanity: last grasp</div>
          </div>
          <div
            class="card"
            onClick={() => navigate("/projects/Space-chefs-from-space")}
          >
            <img src={spaceChefsThumb} alt="Space chefs from space" />
            <div class="card__head">Space chefs from space</div>
          </div>
          <div class="card" onClick={() => navigate("/projects/Tonge-tied")}>
            <img src={tongeTiedThumb} alt="Tonge tied" />
            <div class="card__head">Tonge tied</div>
          </div>
          <div class="card" onClick={() => navigate("/projects/Mitos")}>
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/069/902/225/large/andy-gallego-00-thumb.jpg?1701277293"
              alt="Mitos"
            />
            <div class="card__head">Mitos</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectsMain;
