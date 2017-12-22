import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CircularProgressSimple from './CircularProgressSimple'
//<CircularProgressSimple size={400} thickness={10} />
const CardWithAvatar = (props) => (
  <Card>
    <CardMedia 
      overlay={<CardTitle title={props.titre.length > 0 ? props.titre : "Titre du jeu"} subtitle={props.prix > 0 ? `${props.prix}€` : "Prix du jeu"} />}
    >
    {
    	props.image.length > 0 ?
    			<img src={props.image.length > 0 ? props.image : ""} alt="APERCU" />
    		:
    			<img src="https://buidln.clipdealer.com/002/606/256//previews/14--2606256-White%20squares%20and%20rectangles.jpg" alt="APERCU" />

    }
    </CardMedia>
    <CardText>
     	{!props.description.length > 0 ?  "Description du jeu"
        : 
        <div>{props.description}</div>}
      {
        props.quantity >= 0 ?
          <div>
            <div>
                  <FlatButton className="BoutonModifier" label="Modifier" onClick={e => props.onClickModifie()}/>
                  <FlatButton className="BoutonAjouter" label="Ajouter" onClick={e => props.onClickAjouter({index: props.index})}/>
                  <FlatButton className="BoutonRetirer" label="Retirer" onClick={e => props.onClickRetirer({index: props.index})}/>
                  <FlatButton className="BoutonSupprimer" label="Supprimer" onClick={e => props.onClickSupprimer({index: props.index})}/>
            </div>
            <br/>
            <p>
                Quantité : {props.quantity}
            </p>
          </div>
          :
          <span></span>
      }
    </CardText>
  </Card>
);

export default CardWithAvatar;