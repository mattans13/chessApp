import React from 'react';
import ReactDOM from 'react-dom';
import Knight from './Knight';
import Square from './Square';
import Board from './Board';
import Game from './Game';

var observe = Game.observe;

observe(function (knightsposition) {
	ReactDOM.render(
	<Board knightPosition ={knightsposition} />,
	 document.getElementById('app'));	
})

