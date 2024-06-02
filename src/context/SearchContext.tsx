import React, { createContext, useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  images: string[];
  category: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  products: Product[];
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Barcha kategoriyalardagi mahsulotlarni yuklash
    const fetchProducts = async () => {
      try {
        const categories = ['motorcycle', 'laptops', 'fragrances', 'home-decoration', 'mens-shirts', 'mens-watches'];
        let allProducts: Product[] = [];
        for (const category of categories) {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          const data = await response.json();
          allProducts = [...allProducts, ...data.products];
        }
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, products }}>
      {children}
    </SearchContext.Provider>
  );
};
