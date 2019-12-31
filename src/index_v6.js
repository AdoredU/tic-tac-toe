import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 使用方法组件
// 通过方法定义Square组件
function Square(props) {
    // 注意：使用方法定义组件时，这里的onClick={()=>this.props.onClick()}写法如下：
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
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
