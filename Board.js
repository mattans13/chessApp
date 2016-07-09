import React from 'react';
import Knight from './Knight';
import Square from './Square';
import Game from './Game';

var moveKnight = Game.moveKnight;
var canMoveKnight = Game.canMoveKnight;
var PropTypes = React.PropTypes;

class Board extends React.Component {

	handleSquareClick (toX, toY) {
		if(canMoveKnight(toX, toY)) {
			moveKnight(toX, toY);
		}
	}

	renderSquare (i) {
		var x = i % 8;
	    var y = Math.floor(i / 8);
	    var black = (x + y) % 2 === 1;

	    var knightX = this.props.knightPosition[0];
	    var knightY = this.props.knightPosition[1];
	    var piece = (x === knightX && y === knightY) ?
	      <Knight /> :
	      '\u200B';

	    return (
	      <div key={i}
	           style={{ width: '12.5%', height: '12.5%' }}
	           onClick={this.handleSquareClick.bind(this, x, y)}>
	        <Square black={black}>
	          {piece}
	        </Square>
	      </div>
	    );
	}

	render () {
		var squares = [];

	    for (let i = 0; i < 64; i++) {
	      squares.push(this.renderSquare(i));
	    }

	    return (
	      <div style={{
	        width: '100%',
	        height: '100%',
	        display: 'flex',
	        flexWrap: 'wrap'
	      }}>
	        {squares}
	      </div>
	    );
	}	
}

Board.propTypes = {
	knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}

module.exports = Board;