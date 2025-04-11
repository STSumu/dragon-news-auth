import React from "react";
import Header from "../Components/Header";
import RightNavbar from "../Components/LayoutComponents/RightNavbar";
import { Link, useLoaderData } from "react-router";

const NewsDetails = () => {
    const {data}=useLoaderData();
    //console.log(data);
    const news=data[0];
  return (
    <div className="container mx-auto p-5 md:p-10">
      <header>
        <Header></Header>
        <main className="flex flex-col md:grid md:grid-cols-12 gap-4 mt-20">
          <section className="col-span-9">
            <div className="card bg-base-100 shadow-sm p-7">
              <figure>
                <img
                  src={news.image_url}
                  alt="Shoes"
                  className="rounded-xl w-full"
                />
              </figure>
              <div className="card-body px-0">
                <h2 className="card-title">{news.title}</h2>
                <p>
                  {news.details}
                </p>
                <div className="card-actions">
                  <Link to={`/category/${news.category_id}`} className="btn text-white bg-[#D72050]">All news in this category</Link>
                </div>
              </div>
            </div>
          </section>
          <aside className="right md:col-span-3">
            <RightNavbar></RightNavbar>
          </aside>
        </main>
      </header>
    </div>
  );
};

export default NewsDetails;
