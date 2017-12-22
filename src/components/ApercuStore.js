import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgressSimple from './CircularProgressSimple'
//<CircularProgressSimple size={400} thickness={10} />

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    width: '30%',
    height: '30%',
    overflowY: 'auto',
    marginleft: 'auto',
    marginright: 'auto',  
  },

}



const CardWithAvatar = (props) => (
  <div style={styles.root}>
    {
      props.shop.map((tile, index) => (
        <Card style={styles.card} key={tile.id}>
          <CardMedia 
            overlay={<CardTitle title={tile.titre} subtitle={`${tile.prix}€`} />}
          >
          <img src={tile.image} alt="APERCU" />
          </CardMedia>
          <CardText>
              <div>{tile.description}</div>
                <div>
                  <br/>
                  <p>
                      Quantité restante: {tile.quantity}
                  </p>
                  <br/>
                  <div>
                        <FlatButton className="BoutonAjouterPanier" label="Ajouter au panier" 
                                    onClick={e => {
                                        if(tile.quantity > 0){
                                           props.onClickPanier({state: tile}); 
                                           props.onClickDecrementPanier({index: index});
                                        }
                                        else{
                                          alert("L'article est indisponible pour le moment")
                                        }
                                      }}/>
                  </div>
                  
                </div>
          </CardText>
        </Card>
      ))
    }
  </div>
);

export default CardWithAvatar;