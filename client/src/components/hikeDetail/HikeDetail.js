import React from "react";
import Card from "../card/Card";
function HikeDetail(props) {
  return (
    <Card>
    <div className="text-center">
      <img alt={props.name} className="img-fluid" src={props.src} vaule={props.id} />
    </div>
    </Card>
  );
}

export default HikeDetail;


