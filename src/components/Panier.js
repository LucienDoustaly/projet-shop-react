import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgressSimple from './CircularProgressSimple';
import FloatingActionButton from 'material-ui/FloatingActionButton';
//<CircularProgressSimple size={400} thickness={10} />

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    width: '20%',
    height: '20%',
    overflowY: 'auto',
    marginleft: 'auto',
    marginright: 'auto',  
  },

  quantity: {
    marginRight: 40,
  }

}

const CardWithAvatar = (props) => (
  <div style={styles.root}>
    {
      props.payload.map((tile, index) => (
        <Card style={styles.card}>
          <CardMedia 
            overlay={<CardTitle title={tile.titre} subtitle={`${tile.prix}€`} />}
          >
          <img src={tile.image} alt="APERCU" />
          </CardMedia>
          <CardText>
              <div>{tile.description}</div>
                <div>
                  <div className="quantity">
                    <br/>
                        <span style={styles.quantity}>Quantité: {tile.quantity}</span>
                    <FlatButton className="BoutonIncrementerPanier" label="-" onClick={e => props.onClickDecrementPanier({index: index})}/>
                    <FlatButton className="BoutonDecrementerPanier" label="+" onClick={e => props.onClickIncrementPanier({index: index})}/>
                  </div>
                  <div>
                        <FlatButton className="BoutonAjouterPanier" label="Retirer" onClick={e => props.onClickRetirerPanier({index: index})}/>
                  </div>
                </div>
          </CardText>
        </Card>
      ))
    }
  </div>
);

export default CardWithAvatar;