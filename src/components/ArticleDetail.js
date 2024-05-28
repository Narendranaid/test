import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import BackButton from './BackButton';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const articleDoc = doc(db, 'moreadd', id);
      const articleSnapshot = await getDoc(articleDoc);
      if (articleSnapshot.exists()) {
        setArticle(articleSnapshot.data());
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">{article.title}</h1>
        <BackButton />
      </div>
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg text-gray-700">{article.content}</p>
    </div>
  );
};

export default ArticleDetail;