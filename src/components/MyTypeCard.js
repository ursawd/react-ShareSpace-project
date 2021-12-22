import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from "reactstrap";

export default function MyTypeCard(props) {
  return (
    <React.Fragment>
      <Card className="border-0">
        <img width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle className="display-6">{props.title}</CardTitle>
          <CardText style={{ fontSize: "1.3rem" }}>{props.text}</CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
