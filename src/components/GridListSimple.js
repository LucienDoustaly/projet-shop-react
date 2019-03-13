import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
  button: {
    marginRight: 10,
    marginBottom: 1,
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListSimple = (props) => (

  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      <Subheader>Stock</Subheader>
      {props.payload.map((tile, index) => (
        <GridTile
          key={tile.id}
          title={tile.titre}
          actionIcon={<FlatButton className="BoutonModifier" label="Selectioner" style={styles.button}
                        onClick={e => props.onClickButton(tile, index)}/>}
        >
          <img src={tile.image} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListSimple;
