import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/RaisedButton';
import Form from './components/Form';
import Apercu from './components/Apercu';
import GridListSimple from './components/GridListSimple';
import Panier from './components/Panier';
import ApercuStore from './components/ApercuStore';
import Modifier from './components/Modifier'
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { shop_add_game, shop_update_game, shop_increment_game, shop_decrement_game, shop_delete_game, panier_add_game, panier_delete_game, panier_increment_game, panier_decrement_game, panier_vider_game } from "./services/shop/actions";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


class App extends Component {

  state = {
      slideIndex: 0,
      titre:"",
      prix: 0,
      description: "",
      image: "",
      envoyer: false,

      indexselected: -1,
      titreselected: "",
      prixselected: 0,
      descriptionselected: "",
      imageselected: "",
      modifiedselected: false,

    };

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  _set_state = (elt, e) => {
    switch(elt){
      case 'titre':
        return(this.setState({
                titre: e.target.value
              }))
        break;

      case 'prix':
        return(this.setState({
                prix: e.target.value
              }))
        break;

      case 'description':
        return(this.setState({
                description: e.target.value
              }))
        break;

      case 'image':
        return(this.setState({
                image: e.target.value
              }))
        break;
    }
  };

  _set_update = (elt, e) => {
    switch(elt){
      case 'titre':
        return(this.setState({
                titreselected: e.target.value
              }))
        break;

      case 'prix':
        return(this.setState({
                prixselected: e.target.value
              }))
        break;

      case 'description':
        return(this.setState({
                descriptionselected: e.target.value
              }))
        break;

      case 'image':
        return(this.setState({
                imageselected: e.target.value
              }))
        break;
    }
  };

  _reset_state = () => {
  		this.setState({
	      slideIndex: 0,
	      titre:"",
	      prix: 0,
	      description: "",
	      image: "",
	      envoyer: false,

	      indexselected: -1,
	      titreselected: "",
	      prixselected: 0,
	      descriptionselected: "",
	      imageselected: "",

  	})
  };

  _select = (payload, index) => {
  	this.setState({
		indexselected: index,
		titreselected: payload.titre,
		prixselected: payload.prix,
		descriptionselected: payload.description,
		imageselected: payload.image,
		modifiedselected: false,
  	})
  };

  _modifie = () => {
  	this.setState({
  		modifiedselected: true,
  	})
  };

  _cancelmodifie = () => {
  	this.setState({
		indexselected: -1,
		titreselected: "",
		prixselected: 0,
		descriptionselected: "",
		imageselected: "",
		modifiedselected: false,

  	})
  };

  _delete = (payload) => {
  	this.props.shop_delete_game(payload);
  	this._reset_state();
  };

  _valid = () => {
  	this.props.shop_add_game({ state: this.state });
  	this._reset_state();
  };

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<div>
			        <Tabs
			          onChange={this.handleChange}
			          value={this.state.slideIndex}
			        >
			          <Tab label="Inventaire" value={0} />
			          <Tab label="Store" value={1} />
			          <Tab label="Panier" value={2} />
			        </Tabs>
			        <SwipeableViews
			          index={this.state.slideIndex}
			          onChangeIndex={this.handleChange}
			        >
			          <div style={styles.slide} className="Inventaire">
                  <Grid container spacing={16}>
                    <Grid item xs={4}>
                    <Grid
                      container
                      spacing={16}
                      direction="column"
                      justify="center"
                      alignItems="center"
                      >
                        <Grid item xs={9}>
                        <div className="module">
                          <Apercu titre={this.state.titreselected.length > 0 ? this.props.shop.items[this.state.indexselected].titre : this.state.titre}
                                  prix={this.state.prixselected > 0 ? this.props.shop.items[this.state.indexselected].prix : this.state.prix}
                                  description={this.state.descriptionselected.length > 0 ? this.props.shop.items[this.state.indexselected].description : this.state.description}
                                  image={this.state.imageselected.length > 0 ? this.props.shop.items[this.state.indexselected].image : this.state.image}
                                  quantity={this.state.indexselected >= 0 ? this.props.shop.items[this.state.indexselected].quantity : -1}
                                  index={this.state.indexselected}
                                  onClickModifie={this._modifie.bind(this)}
                                  onClickAjouter={this.props.shop_increment_game.bind(this)}
                                  onClickRetirer={this.props.shop_decrement_game.bind(this)}
                                  onClickSupprimer={this._delete.bind(this)}/>
                        </div>
                        </Grid>
                        <Grid item xs={5}>
                        <div className="module">
                          {
                            this.state.modifiedselected ?
                              <div className="Modifier">
                                <h2 style={styles.headline}>Modifier</h2>
                                <Modifier state={this.state} onChangeText={this._set_update.bind(this)}/>
                                <FlatButton className="BoutonAnnuler" label="Annuler"
                                onClick={() => {this._cancelmodifie()}}/>
                                <FlatButton className="BoutonConfirmer" label="Confirmer"
                                onClick={() => {this.props.shop_update_game({ index: this.state.indexselected, state: this.state}); this._cancelmodifie()}}/>
                              </div>
                            :
                              <div className="Formulaire">
                                <h2 style={styles.headline}>Ajouter un jeu au stock</h2>
                                <Form state={this.state} onChangeText={this._set_state.bind(this)}/>
                                <FlatButton className="BoutonValider" label="Valider" onClick={() => {this.state.prix > 0 ? this._valid() : alert("Veuillez entrer un prix")}}/>
                              </div>
                          }
                        </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={8}>
                    <div className="module">
                      <GridListSimple payload={this.props.shop.items} onClickButton={this._select.bind(this)}/>
                    </div>
                    </Grid>
                  </Grid>
			          </div>
			          <div style={styles.slide} className="Store">
			            <div>
			              <ApercuStore shop={this.props.shop.items} onClickPanier={this.props.panier_add_game.bind(this)} onClickDecrementPanier={this.props.shop_decrement_game.bind(this)}/>
			            </div>
			          </div>
			          <div style={styles.slide} className="Panier">
			          	<div className="PrixPanier"><h1>Total : {`${this.props.shop.prix}€`}</h1>
			          			<FlatButton className="BoutonConfirmer" label="Valider mon panier"
											onClick={() => {this.props.panier_vider_game()}}/>
							<br/><br/>
			          	</div>
			            <Panier payload={this.props.panier}
					            onClickRetirerPanier={this.props.panier_delete_game.bind(this)}
					            onClickIncrementPanier={this.props.panier_increment_game.bind(this)}
					            onClickDecrementStore={this.props.panier_decrement_game.bind(this)}/>
			          </div>
			        </SwipeableViews>
			      </div>
				</div>
		);
	}

}


const mapStateToProps = (state) => ({
	shop: state.shop,
	panier: state.shop.panier,
});


const mapActionsToProps = (dispatch) => ({
	shop_add_game: bindActionCreators(shop_add_game, dispatch),
	shop_update_game: bindActionCreators(shop_update_game, dispatch),
	shop_increment_game: bindActionCreators(shop_increment_game, dispatch),
	shop_decrement_game: bindActionCreators(shop_decrement_game, dispatch),
	shop_delete_game: bindActionCreators(shop_delete_game, dispatch),
	panier_add_game: bindActionCreators(panier_add_game, dispatch),
	panier_delete_game: bindActionCreators(panier_delete_game, dispatch),
	panier_increment_game: bindActionCreators(panier_increment_game, dispatch),
	panier_decrement_game: bindActionCreators(panier_decrement_game, dispatch),
	panier_vider_game: bindActionCreators(panier_vider_game, dispatch),
});


export default connect(mapStateToProps, mapActionsToProps)( App );
