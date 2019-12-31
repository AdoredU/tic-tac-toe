import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 传递参数：React通过属性的方式传递参数。
// 父组件调用子组件时定义属性，子组件通过'this.props.属性名'获取属性
class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/*通过'this.props.参数名'可以获取参数*/}
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        // 通过属性的方式传值
        return <Square value={i}/>
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
