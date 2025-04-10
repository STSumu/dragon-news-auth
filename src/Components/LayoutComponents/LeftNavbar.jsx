import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const LeftNavbar = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category
        ));
    },[])
    console.log(categories)
    return (
        <div>
            <h1 className='font-semibold mb-5 text-[#403F3F]'>All Category</h1>
            <div className='flex flex-col gap-3 *:bg-white'>
                {
                    categories.map(category=>
                        <NavLink key={category.category_id} className="btn border-0 text-[#9F9F9F] shadow-none p-2" to={`category/${category.category_id}`}>{category.category_name}</NavLink>
                    )
                }
            </div>

        </div>
    );
};

export default LeftNavbar;