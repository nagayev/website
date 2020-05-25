import React from "react";
import ReactCardFlip from "react-card-flip";
// https://github.com/roylee0704/react-flexbox-grid/issues/173#issuecomment-628984004
import { Col, Grid, Row } from "react-flexbox-grid/dist/react-flexbox-grid";

interface TileProps {
  active: string;
  backside: string;
}

const Tile: React.FunctionComponent<TileProps> = ({ active, backside }) => {
  const [isFlipped, setFlip] = React.useState(false);
  const t = () => setFlip(!isFlipped);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <span onClick={t}>{active}</span>
        <span onClick={t}>{backside}</span>
      </ReactCardFlip>
    </div>
  );
};

const Tiles: React.FunctionComponent = () => {
  // const offsets = [11, 10, 9, 8];
  // const xss = [1, 2, 3, 4];
  const actives = ["Habr", "Yalp Store", "Coder Book", "Jimp"];
  const backsides = [
    "50k watches",
    "25 issues",
    "Author of course",
    "Fix bug in doc",
  ];
  const tiles = actives.map((value, i) => (
    <Col key={i} /* xsOffset={0} xs={xss[i]} */>
      <Tile active={value} backside={backsides[i]} key={i} />
    </Col>
  ));
  return (
    <Grid /* fluid */>
      <Row>{tiles}</Row>
    </Grid>
  );
};

export default Tiles;
