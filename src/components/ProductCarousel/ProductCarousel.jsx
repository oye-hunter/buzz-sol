import React, { useState, useEffect } from 'react';
import './ProductCarousel.css';
import { Carousel } from 'primereact/carousel';
import { productService } from '../../services/productService';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="product-carousel-card text-center py-5 px-3">
                <div>
                    <h5 className="mb-1 font-normal text-xl">{product.title}</h5>
                    <p className="mx-2 font-light text-base">{product.description}</p>
                    </div>
            </div>
        );
    };


    return (
        <div className="product-carousel-container">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    );
}