import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 定义onClick属性时值为一个函数。
class Square extends React.Component {
    render() {
        /*return (
            <button className="square" onClick={function(){alert('click')}}>
                {/!*通过'this.props.参数名'可以获取参数*!/}
                {this.props.value}
            </button>
        );*/
        // 使用箭头函数
        // 注意：这里的意思是将一个函数作为属性值传给onClick。当点击时会调用该函数。
        // 这里不可以写为 onClick={alert('click')}。这样会导致每次渲染组件时都有alert（页面不停alert）。
        return (
            <button className='square' onClick={()=>alert('click')}>
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
