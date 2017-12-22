import React from "react";
import TextField from 'material-ui/TextField';


export default class Form extends React.Component {
	render() {
	    return (
			<div className="menu-game">
				<TextField
			      hintText="Titre"
			      value={this.props.state.titre}
			      onChange={e => this.props.onChangeText("titre", e)}
			    /><br />
			    <TextField
			      hintText="Prix"
			      value={this.props.state.prix > 0 ? this.props.state.prix : ""}
			      onChange={e => this.props.onChangeText("prix", e)}
			    /><br />
			    <TextField
			      hintText="Description"
			      value={this.props.state.description}
			      multiLine={true}
			      rows={1}
			      rowsMax={10}
			      onChange={e => this.props.onChangeText("description", e)}
			    /><br />
			    <TextField
			      hintText="URL de l'image"
			      value={this.props.state.image}
			      onChange={e => this.props.onChangeText("image", e)}
			    /><br />
			</div>
		);
	}
}