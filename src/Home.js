import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img 
          className='home__image' 
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg' 
          alt='Amazon Prime' 
        />
        
        <div className='home__row'>
          <Product 
            id="12345"
            title="Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer"
            price={41.84}
            image="https://m.media-amazon.com/images/I/61svWgrmT0L._AC_UY218_.jpg"
            rating={5}
          />
          <Product 
            id="12345675"
            title="Learn Ecommerce Web Development Using HTML5, CSS3, Bootstrap, JavaScript, MySQL, and PHP"
            price={32.00}
            image="https://m.media-amazon.com/images/I/71h5znjK2tL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className='home__row'>
        <Product 
            id="12345675"
            title="Develop a full-stack web application with Python and Flask"
            price={34.99}
            image="https://m.media-amazon.com/images/I/817UHYHfKjL._AC_UY218_.jpg"
            rating={4}
          />
          <Product 
            id="12345675"
            title="Full Stack Web Development: Round One - Begin!"
            price={24.99}
            image="https://m.media-amazon.com/images/I/41yJ8e1u3ML._AC_UY218_.jpg"
            rating={4}
          />
          <Product 
            id="12345675"
            title="Full-stack Vue: The Complete Guide to Vue.js"
            price={37.86}
            image="https://m.media-amazon.com/images/I/61OsNehAtjL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className='home__row'>
          <Product 
              id="12345675"
              title="Road to React: Your Journey to Master React.js in JavaScript"
              price={29.34}
              image="https://m.media-amazon.com/images/I/51EyrsWbMGL._AC_UY218_.jpg"
              rating={4}
            />
            <Product 
              id="12345675"
              title="Secrets of the JavaScript Ninja"
              price={44.99}
              image="https://m.media-amazon.com/images/I/81hvVfnV1iL._AC_UY218_.jpg"
              rating={5}
            />
            <Product 
              id="12345675"
              title="JavaScript: The Definitive Guide"
              price={43.99}
              image="https://m.media-amazon.com/images/I/91hUer84PpL._AC_UY218_.jpg"
              rating={4}
            />
        </div>

        <div className='home__row'>
          <Product 
              id="12345675"
              title="C# 8.0 and .NET Core 3.0 - Modern Cross-Platform Development: Build applications with C#, .NET Core, Entity Framework Core, ASP.NET Core, and ML.NET using Visual Studio Code, 4th Edition"
              price={72.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51draL1vcoL._SX404_BO1,204,203,200_.jpg"
              rating={5}
            />
        </div>
      </div>
    </div>
  )
}

export default Home