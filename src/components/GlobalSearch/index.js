import React, { useState } from 'react';
import IconButton from '../IconButton';
import { products } from '../../shared/db';
import CategoryDropdown from '../CategoryDropdown';

export default function GlobalSearch() {
    let [filteredProducts, setFilteredProducts] = useState(products);
    let [keywords, setKeywords] = useState("");

    function filterProducts() {
        setFilteredProducts(products.filter(product => product.name.includes(keywords)))
    }
    
    React.useEffect(() => {
        console.log(filteredProducts)
    }, [filteredProducts])
    
    return (
        <div>
            <CategoryDropdown />
            <input type="text" onChange={(e) => setKeywords(e.target.value)} />
            <IconButton onSearch={filterProducts}>
                SEARCH
            </IconButton>
        </div>
    )
}