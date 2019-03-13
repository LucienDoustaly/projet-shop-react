import * as types from "./constants";


const initialState = {
	items: [
		{
			id: Date.now()+1,
			titre:"Need For Speed PayBack",
	      	prix: 89,
	      	description: "Jeu de course de folie",
	      	image: "https://www.actugaming.net/wp-content/uploads/2017/06/need-for-speed-payback.jpg",
	      	quantity: 0,
		},
		{
			id: Date.now()+2,
			titre:"Overwatch",
	      	prix: 29,
	      	description: "FPS",
	      	image: "https://images4.alphacoders.com/553/553496.jpg",
	      	quantity: 0,
		},
		{
			id: Date.now()+3,
			titre:"World of warcraft",
	      	prix: 50,
	      	description: "MMORPG",
	      	image: "https://images3.alphacoders.com/159/159225.jpg",
	      	quantity: 0,
		},
	],
	panier: [],
	prix: 0,
};


export default function reducer(state = initialState, action)
{
	switch (action.type) {

		case types.SHOP_ADD_GAME:
			var {items} = state;

			items.push(
				{
					id: Date.now(),
					titre: action.payload.state.titre,
					prix: action.payload.state.prix,
					description: action.payload.state.description,
					image: action.payload.state.image,
					quantity: 0
				}
			);

			return {
				...state,
				items: items
			};
			break;

		case types.SHOP_UPDATE_GAME:
			var {items} = state;

			items[action.payload.index].titre = action.payload.state.titreselected;
			items[action.payload.index].prix = action.payload.state.prixselected;
			items[action.payload.index].description = action.payload.state.descriptionselected;
			items[action.payload.index].image = action.payload.state.imageselected;

			return {
				...state,
				items: items
			};
			break;

		case types.SHOP_INCREMENT_GAME:
			var {items} = state;
			items[action.payload.index].quantity = state.items[action.payload.index].quantity + 1;
			return {
				...state,
				items: items
			};
			break;

		case types.SHOP_DECREMENT_GAME:
			var {items} = state;
			if(items[action.payload.index].quantity > 0){
				items[action.payload.index].quantity = state.items[action.payload.index].quantity - 1;
			}
			else{
				items[action.payload.index].quantity = 0;
			}
			return {
				...state,
				items: items
			};
			break;

		case types.SHOP_DELETE_GAME:
			var {items} = state;

			items.splice(action.payload.index, 1);

			return {
				...state,
				items: items
			};
			break;

		case types.PANIER_ADD_GAME:
			var exist = -1;

			state.panier.forEach((elt, index) => {
				if(elt.titre === action.payload.state.titre){
					return exist=index;
				}
			})

			var {panier} = state;
			var {prix} = state;
			var price = 0;
			if(exist > -1){
				panier[exist].quantity = panier[exist].quantity + 1;
			}
			else{
				panier.push(
				{
					id: action.payload.state.id,
					titre: action.payload.state.titre,
					prix: action.payload.state.prix,
					description: action.payload.state.description,
					image: action.payload.state.image,
					quantity: 1,
				}
			);
			}

			state.panier.forEach((elt) => {
				price=prix+elt.prix;
			})

			return {
				...state,
				panier: panier,
				prix: price
			};
			break;

		case types.PANIER_DELETE_GAME:
			var{items}=state;
			var {panier} = state;
			var {prix} = state;
			var price = 0;
			price=prix-panier[action.payload.index].prix*panier[action.payload.index].quantity;
			items[action.payload.index].quantity = state.items[action.payload.index].quantity + panier[action.payload.index].quantity;
			panier.splice(action.payload.index, 1);
			return {
				...state,
				items: items,
				panier: panier,
				prix: price
			};
			break;

		case types.PANIER_INCREMENT_GAME:
			var{items}=state;
			var {panier} = state;
			var {prix} = state;
			var price = 0;
			if(state.items[action.payload.index].quantity==0){
				alert("L'article est indisponible pour le moment");
				price=prix;
			}
			else{
				panier[action.payload.index].quantity = panier[action.payload.index].quantity + 1;
				items[action.payload.index].quantity = state.items[action.payload.index].quantity - 1;
				price=prix+panier[action.payload.index].prix;
			}

			return {
				...state,
				panier: panier,
				items: items,
				prix: price
			};
			break;

		case types.PANIER_DECREMENT_GAME:
			var {items} = state;
			var {panier} = state;
			var {prix} = state;
			var price = 0;

			if(panier[action.payload.index].quantity > 0){
				panier[action.payload.index].quantity = panier[action.payload.index].quantity - 1;
				items[action.payload.index].quantity = state.items[action.payload.index].quantity + 1;
				price=prix-panier[action.payload.index].prix;
			}
			else{
				panier.splice(action.payload.index, 1);
			}

			return {
				...state,
				panier: panier,
				items: items,
				prix: price
			};
			break;

		case types.PANIER_VIDER_GAME:
			var {panier} = state;
			var {prix} = state;
			var price = 0;

			panier=[];

			return {
				...state,
				panier: panier,
				prix: price
			};
			break;

		default:
			return state;

	}
};
