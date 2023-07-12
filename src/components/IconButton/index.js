import React from 'react';

export default function IconButton({ onSearch, children }) {
    
    
    return (
    
        <button type="button" className="btn btn-primary" onClick={onSearch}>
            {children}
        </button>
        
        
    )
}