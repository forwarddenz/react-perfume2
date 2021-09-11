import React from 'react';
import s from './PizzaBlock.module.css';

function PizzaBlock({ id, imageUrl, name, price, type, onAddPizza, cartItems }) {

    const onClickAddPizza = () => {
        const obj = { id, type }
        onAddPizza(obj)
    }
    const addedCount = cartItems[id] ? cartItems[id].length : 0;

    return (
        <div className={s.pizzablock__item} id={id}>
            <img className={s.pizzablock__img} src={imageUrl} alt='item' />
            <div className={s.item__name}>{name}</div>
            <div className={s.category}>{type}</div>
            <div className={s.price}>{price} ₽</div>
            <div className={s.addTo__basket} onClick={onClickAddPizza}>
                <div className={s.addTo__basket_icon}>+</div>
                <div className={s.addTo__basket_text}>Добавить
                    {
                        addedCount > 0 && <span>{addedCount}</span>
                    }
                </div>
            </div>
        </div>
    )
};

export { PizzaBlock };
