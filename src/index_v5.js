import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 目前每个Square各自保存自己的属性。考虑判定游戏胜负等，合理的方式是把这些属性存入Board，通过属性传递来将
// Board中保存的值传递给每个Square。
// 而当Square点击时，Square无法更新Board中的state（私有），因此要在Board使用Square时传递一个方法作为
// 属性值给Square，当点击时Square调用该方法。
/**
 When a Square is clicked, the onClick function provided by the Board is called. Here’s a review of how this is achieved:

 1. The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
 2. When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.
 3. This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.
 4. Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
 */
class Square extends React.Component {
    render() {
        return (
            <button
                className='square'
                onClick={()=>this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        // this.state赋值时后面为对象
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        // slice()方法复制数组而不改变原数组。
        // React推荐Immutability特性，即原数据不改变。此特性有诸多好处。
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares})
    }
    renderSquare(i) {
        // 多行时记得加小括号
        return (
            <Square
                value={this.state.squares[i]}
                onClick={()=>this.handleClick(i)}
            />
        )
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'))
