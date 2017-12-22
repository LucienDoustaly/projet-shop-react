import React from "react";
import TextField from 'material-ui/TextField';


export default class Modifier extends React.Component {
	render() {
	    return (
			<div className="menu-game">
				<TextField
			      hintText="Titre"
			      defaultValue={this.props.state.titreselected}
			      onChange={e => this.props.onChangeText("titre", e)}
			    /><br />
			    <TextField
			      hintText="Prix"
			      defaultValue={this.props.state.prixselected > 0 ? this.props.state.prixselected : ""}
			      onChange={e => this.props.onChangeText("prix", e)}
			    /><br />
			    <TextField
			      hintText="Description"
			      defaultValue={this.props.state.descriptionselected}
			      multiLine={true}
			      rows={1}
			      rowsMax={10}
			      onChange={e => this.props.onChangeText("description", e)}
			    /><br />
			    <TextField
			      hintText="URL de l'image"
			      defaultValue={this.props.state.imageselected}
			      onChange={e => this.props.onChangeText("image", e)}
			    /><br />
			</div>
		);
	}
}