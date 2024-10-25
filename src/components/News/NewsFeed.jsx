import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = () => {
  const news = [
    {
      image: 'https://source.unsplash.com/800x400/?office',
      date: 'Mar 16, 2024',
      category: 'Marketing',
      title: 'Mejora tu rango de conversión',
      description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo.',
      author: 'Michael Foster',
      authorRole: 'Co-Founder / CTO',
      authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      image: 'https://source.unsplash.com/800x400/?workspace',
      date: 'Mar 10, 2020',
      category: 'Ventas',
      title: 'Como mejorar tu propiedad en 10 pasos',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
      author: 'Lindsay Walton',
      authorRole: 'Vendedora Master',
      authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      image: 'https://source.unsplash.com/800x400/?desk',
      date: 'Feb 12, 2020',
      category: 'Business',
      title: 'Mejora tus habilidades en Negocios',
      description: 'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus.',
      author: 'Tom Cook',
      authorRole: 'Director of Product',
      authorImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item, index) => (
        <NewsCard
          key={index}
          image={item.image}
          date={item.date}
          category={item.category}
          title={item.title}
          description={item.description}
          author={item.author}
          authorRole={item.authorRole}
          authorImage={item.authorImage}
        />
      ))}
    </div>
  );
};

export default NewsFeed;
