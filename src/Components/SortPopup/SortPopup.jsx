import React, { useState, useRef, useEffect } from 'react';
import s from './SortPopup.module.css';

const SortPopup = React.memo(function SortPopup({ sortItems, activeSortType, onSelectSortType }) {

    // useHook
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortRef = useRef();
    const activeName = sortItems.find(obj => obj.type === activeSortType).name;

    const handleoutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(event.target);
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        };
    };

    // useEffect
    useEffect(() => {
        document.body.addEventListener('click', handleoutsideClick);
    }, []);

    // Functions
    const onVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const onSelectActiveItem = (obj) => {
        if (onSelectSortType) {
            onSelectSortType(obj);
        }
        setVisiblePopup(false);
    };


    return (
        <div className={s.sort}>
            <div ref={sortRef}>
                <div className={s.sort__type}>
                    <div className={visiblePopup ? 'sort__label sort__label-active' : 'sort__label'}></div>
                    <div className={s.sort__by}>Сортировать по: <span onClick={onVisiblePopup}>{activeName}</span></div>
                </div>
                <div>
                    {
                        visiblePopup &&
                        <ul className={s.sort__popup}>
                            {
                                sortItems.map((obj, index) => <li onClick={() => onSelectActiveItem(obj)} className={
                                    activeSortType === obj.type ? 'active' : ''
                                } key={index}>{obj.name}</li>)
                            }
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
})

export { SortPopup };
