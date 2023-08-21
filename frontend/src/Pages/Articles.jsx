import React from "react";
import articleData from "../article.json";

const Articles = () => {
  return (
    <>
      <div className="  text-xl font-semibold border-b-2">Article</div>
      {articleData.map((article) => (
        <div className="my-3 py-4 px-2 rounded-lg text-justify " key={article.id}>
          <p className="font-semibold text-lg">{article.title}</p>
          <p>{article.desc}</p>
          <p className="font-semibold text-primary text-end ">~ {article.user}</p>
        </div>
      ))}
    </>
  );
};

export default Articles;
