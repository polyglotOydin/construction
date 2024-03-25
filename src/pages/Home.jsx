import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [currentItem, setCurrentItem] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem % 4) + 1); // Change to next item cyclically
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleItemClick = (itemId) => {
    setCurrentItem(itemId); // Update current item when a button is clicked
  };

  return (
    <>
      <div className='h-screen relative bg-background-pattern'>
        <Navbar />
        <div className="carousel w-full h-full relative">
          <div id="item1" className={`carousel-item w-full h-full ${currentItem === 1 ? '' : 'hidden'}`}>
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full h-full object-cover" />
          </div> 
          <div id="item2" className={`carousel-item w-full h-full ${currentItem === 2 ? '' : 'hidden'}`}>
            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full h-full object-cover" />
          </div> 
          <div id="item3" className={`carousel-item w-full h-full ${currentItem === 3 ? '' : 'hidden'}`}>
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full h-full object-cover" />
          </div> 
          <div id="item4" className={`carousel-item w-full h-full ${currentItem === 4 ? '' : 'hidden'}`}>
            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center w-full absolute bottom-4 gap-2">
            <button onClick={() => handleItemClick(1)} className="btn btn-xs">1</button> 
            <button onClick={() => handleItemClick(2)} className="btn btn-xs">2</button> 
            <button onClick={() => handleItemClick(3)} className="btn btn-xs">3</button> 
            <button onClick={() => handleItemClick(4)} className="btn btn-xs">4</button>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Home;
