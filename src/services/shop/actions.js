
import * as types from "./constants";

export function shop_add_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SHOP_ADD_GAME,
			payload: payload
		});
	}
};

export function shop_update_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SHOP_UPDATE_GAME,
			payload: payload
		});
	}
};

export function shop_increment_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SHOP_INCREMENT_GAME,
			payload: payload
		});
	}
};

export function shop_decrement_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SHOP_DECREMENT_GAME,
			payload: payload
		});
	}
};

export function shop_delete_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.SHOP_DELETE_GAME,
			payload: payload
		});
	}
};

export function panier_add_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.PANIER_ADD_GAME,
			payload: payload
		});
	}
};

export function panier_delete_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.PANIER_DELETE_GAME,
			payload: payload
		});
	}
};

export function panier_increment_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.PANIER_INCREMENT_GAME,
			payload: payload
		});
	}
};


export function panier_decrement_game(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.PANIER_DECREMENT_GAME,
			payload: payload
		});
	}
};

export function panier_vider_game() {
	return (dispatch, state) => {

		dispatch({
			type: types.PANIER_VIDER_GAME
		});
	}
};