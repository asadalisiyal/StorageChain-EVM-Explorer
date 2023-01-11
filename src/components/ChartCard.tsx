import * as React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

interface IProps {
  children: any;
  title: string;
  style?: any;
}

const ChartCard: React.FC<IProps> = (props) => {
  return (
    <Card elevation={0} style={props.style}>
      <CardContent>
        <Typography variant="h6">{props.title}</Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default ChartCard;
