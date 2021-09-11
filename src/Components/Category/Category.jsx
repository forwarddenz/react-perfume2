import React from 'react';
import s from './Category.module.css'

const Category = React.memo(function Category({ CategoryName, onSelectCategoryIndex, activeCategory }) {
    
    return (
        <div className={s.Category}>
            <ul>
                <li className={
                    activeCategory === null ? 'active' : ''
                } onClick={() => onSelectCategoryIndex(null)}>Все</li>
                {
                    CategoryName.map((item, index) => <li className={
                        activeCategory === index ? 'active' : ''
                    } onClick={() => onSelectCategoryIndex(index)} key={`${item}_${index}`} >{item}</li>)
                }
            </ul>
        </div>
    )
});

export { Category };