import React from 'react';
import CartItem from '../Components/CartItem';
import Actions from '../Components/redux/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';

function Cart() {

    const dispatch = useDispatch();
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

    const plusCartItem = React.useCallback(id => dispatch(Actions.plusItem(id)), [dispatch]);
    const minusCartItem = React.useCallback(id => dispatch(Actions.minusItem(id)), [dispatch]);
    const removeItemsById = React.useCallback(id => dispatch(Actions.removeCartItem(id)), [dispatch]);
    const clearCart = React.useCallback(() => {
        if (window.confirm('Вы действительно хотите очистить корзину')) {
            dispatch(Actions.clearCart);
        }
    }, [dispatch]);

    return (
        <div className="container container--cart">
            {
                !items ? <div className="cart">
                    Корзина пустая
                    <a href='/'>Вернуться назад</a>
                </div> : <div className="cart__active">
                    <div className="cart__header">
                        <h2 className="cart__title">Корзина</h2>
                        <span className="cart__clear" onClick={clearCart}>Очистить корзину</span>
                    </div>
                    <div className="cart__items">
                        {map(items, ([item]) => (
                            <CartItem
                                key={item.id}
                                {...item}
                                onMinus={() => minusCartItem(item.id)}
                                onPlus={() => plusCartItem(item.id)}
                                onRemove={() => removeItemsById(item.id)}
                                count={items[item.id].length}
                            />
                        ))}
                    </div>
                    <div className="cart__total">
                        <div className="total__count">Всего: <span>{totalCount} шт.</span></div>
                        <div className="total__price">Сумма заказа: <span>{totalPrice} ₽</span></div>
                    </div>
                    <div className="cart__bottom">
                        <a href='/'>Вернуться назад</a>
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            }
        </div>
    )
}

export { Cart };