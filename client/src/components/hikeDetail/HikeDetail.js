import React from "react";
import Card from "../card/Card";
function HikeDetail(props) {
  return (
    <Card>
    <div className="text-center">
    {/* <h1>{(this.state.results.trails[1].name)}</h1> */}
      <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
    </div>
    </Card>
  );
}

export default HikeDetail;


