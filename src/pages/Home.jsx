import React, { useEffect, useCallback } from 'react';
import { Category } from '../Components/Category/Category';
import { PizzaBlock } from '../Components/PizzaBlock/PizzaBlock';
import { SortPopup } from '../Components/SortPopup/SortPopup';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPizzas } from '../Components/redux/actions/pizzas';
import { setSortBy, setCategory } from '../Components/redux/actions/filter';
import LoadingBlock from '../Components/PizzaBlock/LoadingBlock';
import Actions from '../Components/redux/actions/cart';

const CategoryName = ['Туалетная вода', 'Парфюмерная вода', 'Духи', 'Мужское', 'Женское'];
const sortItems =
    [{ name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'asc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },]

function Home() {

    const { category, sortBy } = useSelector(({ filter }) => filter);
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const dispatch = useDispatch();

    // call dispatch

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const onSelectCategoryIndex = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(Actions.addToCart(obj));
    };

    return (
        <div className='container'>
            <div className="sort">
                <Category CategoryName={CategoryName} activeCategory={category} onSelectCategoryIndex={onSelectCategoryIndex} />
                <SortPopup sortItems={sortItems} activeSortType={sortBy.type} onSelectSortType={onSelectSortType} />
            </div>
            <div className="content__items">
                {
                    isLoaded ? items.map((item) => <PizzaBlock key={item.id} cartItems={cartItems} onAddPizza={handleAddPizzaToCart}  {...item} />) : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
};

export { Home };