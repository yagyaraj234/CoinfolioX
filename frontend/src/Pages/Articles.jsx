import React from "react";
import articleData from "../article.json";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    
    <>
      {articleData?.map((article) => (
        <article
          key={article.id}
          className="flex bg-white transition hover:shadow-xl my-20 shadow-lg "
        >
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>{article.year}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{article.date}</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="article-img"
              src={article.image}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <Link to={article.link}>
                <h3 className="font-bold text-3xl uppercase text-gray-900 text-left">
                  {article.title}
                </h3>
              </Link>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {article.desc}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <Link
                to={article.link}
                className="block bg-gray-800 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-gray-900"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Articles;
