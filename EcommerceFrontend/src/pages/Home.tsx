import React, { useEffect, useState } from 'react';
import InfoCard from '../components/ProductCard';
import Carousel from '../components/Carousel';
import api from '../services/Api';

interface BackendSlide {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
}

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    api.get<BackendSlide[]>("Homepage/carousel/")
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          src: item.image_url,
          alt: item.title,
          title: item.title,
          description: item.description,
        }));
        setSlides(formatted);
      })
      .catch((error) => {
        console.error("Failed to fetch carousel data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-start overflow-hidden">
      <div className="pt-10">
        {slides.length > 0 ? <Carousel slides={slides} /> : <p>Loading...</p>}
        
        <InfoCard 
          image="https://picsum.photos/200/300"
          title="Flower"
          description="This is an image from Lorem Picsum"
        />
      </div>
    </div>
  );
};

export default Home;
