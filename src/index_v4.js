import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// React使用state来存储数据。通过构造方法（constructor）初始化state，state应该理解为私有属性。
class Square extends React.Component {
    constructor(props) {
        super(props); // 固定写法。js里定义子类的构造时必须调用父类方法。React规定必须在开头调用该方法。
        // 通过this.state初始化state里面属性。
        this.state = {
            value: null,
        }
    }

    render() {
        // React调用setState方法时，会自动更新其内子组件内容。
        return (
            <button
                className='square'
                onClick={()=>this.setState({value: 'X'})}
            >
                {this.state.value}
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
