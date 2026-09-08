import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description:
            'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description:
            'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description:
            'Removes mold spores and helps purify indoor air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description:
            'Adds humidity and helps remove toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description:
            'Easy to care for and effective at improving indoor spaces.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description:
            'Purifies the air and is known for its soothing properties.',
          cost: '$14',
        },
      ],
    },

    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description:
            'A calming fragrance often used for relaxation.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description:
            'Sweet floral fragrance that creates a peaceful atmosphere.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description:
            'An invigorating herb with a refreshing natural aroma.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description:
            'Fresh and uplifting, perfect for kitchens and herb gardens.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description:
            'A citrus-inspired scent known for its calming character.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description:
            'A beautiful flowering plant with a distinctive fragrance.',
          cost: '$22',
        },
      ],
    },

    {
      category: 'Natural Insect Repellents',
      plants: [
        {
          name: 'Oregano',
          image:
            'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
          description:
            'Contains natural compounds that may help deter insects.',
          cost: '$10',
        },
        {
          name: 'Marigold',
          image:
            'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
          description:
            'Adds vibrant color while naturally helping repel insects.',
          cost: '$8',
        },
        {
          name: 'Geranium',
          image:
            'https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg',
          description:
            'A fragrant flowering plant with natural repellent qualities.',
          cost: '$20',
        },
        {
          name: 'Basil',
          image:
            'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
          description:
            'A versatile herb for kitchens and gardens.',
          cost: '$9',
        },
        {
          name: 'Citronella',
          image:
            'https://cdn.pixabay.com/photo/2016/11/29/05/08/plant-1867115_1280.jpg',
          description:
            'Known for its fresh scent and outdoor garden appeal.',
          cost: '$16',
        },
        {
          name: 'Catnip',
          image:
            'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
          description:
            'An easy-to-grow leafy herb popular in home gardens.',
          cost: '$13',
        },
      ],
    },

    {
      category: 'Medicinal Garden Plants',
      plants: [
        {
          name: 'Echinacea',
          image:
            'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description:
            'A beautiful flowering plant traditionally used in herbal gardens.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image:
            'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description:
            'A refreshing herb commonly grown for teas.',
          cost: '$13',
        },
        {
          name: 'Chamomile',
          image:
            'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description:
            'Delicate flowers traditionally associated with relaxation.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image:
            'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description:
            'Bright flowers commonly found in wellness gardens.',
          cost: '$12',
        },
        {
          name: 'Sage',
          image:
            'https://cdn.pixabay.com/photo/2018/04/20/12/57/herbs-3338326_1280.jpg',
          description:
            'A fragrant herb with attractive soft green leaves.',
          cost: '$14',
        },
        {
          name: 'Thyme',
          image:
            'https://cdn.pixabay.com/photo/2017/05/23/22/36/thyme-2338504_1280.jpg',
          description:
            'A compact aromatic herb suitable for small gardens.',
          cost: '$11',
        },
      ],
    },

    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image:
            'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
          description:
            'Thrives in low light and requires very little maintenance.',
          cost: '$25',
        },
        {
          name: 'Golden Pothos',
          image:
            'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description:
            'A resilient trailing plant that adapts to many environments.',
          cost: '$10',
        },
        {
          name: 'Jade Plant',
          image:
            'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description:
            'A beautiful succulent with thick leaves and minimal care needs.',
          cost: '$18',
        },
        {
          name: 'Cast Iron Plant',
          image:
            'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description:
            'A tough plant that tolerates low light and neglect.',
          cost: '$20',
        },
        {
          name: 'Succulents',
          image:
            'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description:
            'Drought-tolerant plants with striking shapes and textures.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image:
            'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description:
            'A beautiful indoor plant requiring minimal care.',
          cost: '$22',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleCartClick = () => {
    setShowCart(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleContinueShopping = () => {
    setShowCart(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    }
  };

  return (
    <div className="shop-page">

      {/* NAVBAR */}
      <nav className="shop-navbar">
        <div className="shop-nav-inner">

          <div className="shop-brand">
            <div className="shop-brand-symbol">✦</div>

            <div>
              <h2>Paradise Nursery</h2>
              <span>BOTANICAL COLLECTION</span>
            </div>
          </div>

          <div className="shop-nav-actions">

            <button
              className="nav-link"
              onClick={handleHomeClick}
            >
              Home
            </button>

            <button
              className="nav-link"
              onClick={handleContinueShopping}
            >
              Plants
            </button>

            <button
              className="cart-button"
              onClick={handleCartClick}
            >
              <span>🛒</span>
              <span>Cart</span>

              <span className="cart-count">
                {cart.numOfItems}
              </span>
            </button>

          </div>
        </div>
      </nav>


      {/* PRODUCT LIST */}
      {!showCart ? (
        <main className="shop-content">

          <section className="collection-hero">

            <div>
              <span className="section-label">
                CURATED BOTANICAL COLLECTION
              </span>

              <h1>
                Find your next
                <br />
                <em>green companion.</em>
              </h1>
            </div>

            <p>
              Explore our carefully curated collection of beautiful
              houseplants designed to bring freshness and natural
              beauty into your home.
            </p>

          </section>


          {plantsArray.map((section, sectionIndex) => (

            <section
              className="collection-section"
              key={section.category}
            >

              <div className="collection-heading">

                <div>
                  <span>
                    COLLECTION{' '}
                    {String(sectionIndex + 1).padStart(2, '0')}
                  </span>

                  <h2>{section.category}</h2>
                </div>

                <div className="heading-line"></div>

              </div>


              <div className="product-list">

                {section.plants.map((plant, plantIndex) => {

                  const isAdded = cart.items.some(
                    (item) => item.name === plant.name
                  );

                  return (
                    <article
                      className="product-card"
                      key={`${section.category}-${plantIndex}`}
                    >

                      <div className="product-image-wrapper">

                        <img
                          className="product-image"
                          src={plant.image}
                          alt={plant.name}
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src =
                              'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80';
                          }}
                        />

                        <span className="product-category-badge">
                          Plant
                        </span>

                      </div>


                      <div className="product-info">

                        <div className="product-top">

                          <h3 className="product-title">
                            {plant.name}
                          </h3>

                          <p className="product-price">
                            {plant.cost}
                          </p>

                        </div>

                        <p className="product-description">
                          {plant.description}
                        </p>

                        <button
                          className={`product-button ${
                            isAdded ? 'added-to-cart' : ''
                          }`}
                          disabled={isAdded}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {isAdded
                            ? '✓ Added to Cart'
                            : 'Add to Cart'}
                        </button>

                      </div>

                    </article>
                  );
                })}

              </div>

            </section>
          ))}

        </main>
      ) : (

        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHomeClick}
        />

      )}

    </div>
  );
}

export default ProductList;