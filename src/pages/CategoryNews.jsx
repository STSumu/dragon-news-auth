import React from 'react';
import { useLoaderData } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {data:news}=useLoaderData();
    console.log(news);
    return (
        <div>
            <h1 className='text-[#403F3F] text-xl text-start font-semibold mb-4'>Dragon News Home</h1>
            <div className='space-y-8 '>
           {
            news.map((element)=><NewsCard key={element._id} news={element}></NewsCard>)
           } 
        </div>
        </div>
    );
};

export default CategoryNews;