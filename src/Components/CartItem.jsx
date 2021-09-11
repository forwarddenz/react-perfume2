import React from 'react';

function CartItem({ imageUrl, name, type, count, price, onMinus, onPlus, onRemove }) {
    return (
        <div className="cart__item" >
            <div className="cart__info">
                <img src={imageUrl} alt="pizza" />
                <div className="item__text">
                    <div className="item__title">{name}</div>
                    <div className="item__type">{type}</div>
                </div>
            </div>
            <div className="cart__counter">
                <div className="cart__decrement" onClick={onMinus}>-</div>
                <div className="cart__count">{count}</div>
                <div className="cart__increment" onClick={onPlus}>+</div>
            </div>
            <div className="item__price">{price * count} ₽</div>
            <div className="item__clear" onClick={onRemove}>&#10006;</div>
        </div >
    )
}

export default CartItem
