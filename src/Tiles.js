import React from 'react';
function Tile(props){
    const styles = {
        width:'100%',
        height:'100%',
        borderColor:'white',
        borderStyle:'solid'
    }
    const [active,setActive] = React.useState(props.active);
    const toggle = () => (active==props.active)?setActive(props.backside):setActive(props.active);
    return (
        <div style={styles} onClick={toggle}>
            {active}
        </div>
    );
}
function Tiles(){
    const styles = {
        width:'100%',
        height:'100%'
    }
    return (
        <div style={styles}>
             <Tile active="Habr" backside="13k watches" />
        </div>
    );
}
export default Tiles;