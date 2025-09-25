import type { Product } from '../types';

// Mock API service for demonstration
export const ApiService = {
  async getProduct(id: string | number): Promise<Product> {
    // Mock product data
    const mockProduct: Product = {
      id: Number(id) || 1,
      title: 'Sample Product',
      price: 29.99,
      description: 'This is a sample product description.',
      image: 'https://via.placeholder.com/300x300',
      category: 'electronics',
      rating: 4.5,
      stock: 10
    };
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockProduct;
  },

  async getProducts(): Promise<Product[]> {
    // Mock products data
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Sample Product 1',
        price: 29.99,
        description: 'This is a sample product description.',
        image: 'https://via.placeholder.com/300x300',
        category: 'electronics',
        rating: 4.5,
        stock: 10
      },
      {
        id: 2,
        title: 'Sample Product 2',
        price: 39.99,
        description: 'This is another sample product description.',
        image: 'https://via.placeholder.com/300x300',
        category: 'clothing',
        rating: 4.2,
        stock: 5
      }
    ];
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockProducts;
  }
};
