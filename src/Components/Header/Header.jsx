import React from 'react';
import s from './Header.module.css';
import logo from '../Img/logo.svg';
import search from '../Img/search.svg';
import cart from '../Img/cart.svg';
import Original from '../Img/Original.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header() {

    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <header>
            <div className="container">
                <div className={s.wrapper}>
                    <Link to='/' className={s.logo}>
                        <img src={logo} alt="logo" className={s.logo__img} />
                        <div className={s.logo__info}>
                            <img className={s.logo__title} src={Original} alt='title'></img>
                            <div className={s.logo__text}>
                                Сайт для онлайн покупки духов
                            </div>
                        </div>
                    </Link>
                    <div className={s.navBlock}>
                        <img className={s.navBlock__search} src={search} alt='search' ></img>
                        <Link to='/Cart' className={s.cart}>
                            <div className={s.cart__price}>{totalPrice} ₽</div>
                            <div className={s.cart__separator}></div>
                            <img src={cart} alt="cart" className={s.cart__img} />
                            <div className={s.cart__quantity}>{totalCount}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header };
