import React from 'react';

const FeaturesSection = () => {
  return (
    <div className='relative bg-green-800 text-white py-16'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold'>Get started in a few easy steps</h1>
      </div>
      <div className='flex justify-around'>
        <div className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>⬇️</div>
          <h3 className='text-xl font-semibold'>Sell products and advertise</h3>
          <p>Sell products and advertise them efficiently</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>⬇️</div>
          <h3 className='text-xl font-semibold'>Shop for products</h3>
          <p>
            Shop for your favourite products and get paid for advertisements
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>⬇️</div>
          <h3 className='text-xl font-semibold'>Deliver Products Seamlessly</h3>
          <p>Have your products delivered in the best time possible</p>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-green-800 to-transparent' />
      <div className='absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-green-800 to-transparent' />
    </div>
  );
};

export default FeaturesSection;
