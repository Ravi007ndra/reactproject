import React from 'react';
import { categories } from '../../shared/db';

export default function CategoryDropdown() {

    return (
        <div class="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                {
                    categories.map(category => (
                        <li><a className="dropdown-item" href="#">{category.name}</a></li>
                    ))                    
                }
            </ul>
        </div>
    )
}