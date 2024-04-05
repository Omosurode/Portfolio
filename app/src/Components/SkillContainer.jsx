import React from "react";

function SkillContainer(props) {
  return (
    <>
      <div className="tooltip" data-tip={props.dataTip}>
        <button className="btn m-4 size-40 transition ease-in-out hover:scale-110 hover:bg-secondary duration-300 *:size-24 *:hover:fill-slate-100 *:transition *:ease-in-out *:duration-300">
          {props.faIcon}
        </button>
      </div>
    </>
  );
}

export default SkillContainer;
