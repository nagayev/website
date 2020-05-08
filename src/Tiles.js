import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactCardFlip from 'react-card-flip';
function Tile(props){
    const [isFlipped,setFlip] = React.useState(false);
    const t = () => setFlip(!isFlipped);
    return (
        <div key={props.key}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <span onClick={t}>{props.active}</span>
                <span onClick={t}>{props.backside}</span>
            </ReactCardFlip>
        </div>
    );
}
function Tiles(){
    const offsets = [11,10,9,8];
    const xss = [1,2,3,4];
    const actives = ["Habr","Yalp Store","Coder Book","Jimp"];
    const backsides = ["50k watches","25 issues","Author of course","Fix bug in doc"];
    const tiles = actives.map((value,i)=>
    <Col xsOffset={0} xs={xss[i]}><Tile active={value} backside={backsides[i]} key={i} /></Col>
    );
    return (
        <Grid fluid>
          <Row>
            {tiles}
          </Row>
        </Grid>
    );
}
export default Tiles;