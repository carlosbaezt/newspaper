import React from 'react';
import Category from '../Category/Category';
import classes from './CategoryList.module.css'
import { NavLink} from 'react-router-dom';


const CategoryList = () => {
    const categories = ['Internacionales', 'Deportes', 'Espectáculos', 'Tecnología', 'Política'];
    return (
        <div className={classes.CategoryList}>
            <NavLink
                exact
                to='/'
                activeClassName={classes.Active}
                className={classes.Link}>
                    HOME
            </NavLink>
            { categories.map(category => {
                return <NavLink
                            key={category}
                            to={'/category/'+category}
                            activeClassName={classes.Active}
                            className={classes.Link}>
                            <Category name={category} />
                        </NavLink>
            })}
        </div>
    );
}

export default CategoryList;
