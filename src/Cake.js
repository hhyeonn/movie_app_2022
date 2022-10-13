import React, { Component } from 'react' //rcc 단축키
import App from './App';

class Cake extends Component {

    state = {
        price: 10000,
        sale: 0,
    };

    sale = () => {
        console.log('30% 할인가 계산');
        this.setState(current => (
            {sale : current.price * 0.7}
            ))
    }

    render() {
        return (
        <>
            <div>Cake</div>
            <h1>cake 가격 : {this.state.price}원</h1>
            <h2>할인 가격 : {this.state.sale}원</h2>
            <button onClick={this.sale}>30% 할인</button>
        </>
        )
    }
}

export default App;