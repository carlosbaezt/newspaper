import React from 'react';
import Category from '../Category/Category';
import classes from './CategoryList.module.css'

const CategoryList = () => {
    const categories = ['Home', 'Internacional', 'Sociales', 'Deportes'];
    return (
        <div className={classes.CategoryList}>
            { categories.map(category => {
                return <Category key={category} name={category} />
            })}
        </div>
    );
}

export default CategoryList;
