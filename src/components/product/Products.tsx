import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductFilters, { type SortOption } from './ProductFilters';
import ProductGrid from './ProductGrid';
import { useCart } from '../../context/CartContext';
import { ApiService } from '../../services/api';
import type { Product } from '../../types';

const applyClientFilters = (
  items: Product[],
  q: string | null,
  minPrice: string | null,
  maxPrice: string | null,
  sort: SortOption | null,
): Product[] => {
  let out = items.slice();

  // text search
  if (q && q.trim() !== '') {
    const t = q.trim().toLowerCase();
    out = out.filter(p =>
      p.title.toLowerCase().includes(t) ||
      p.description.toLowerCase().includes(t) ||
      p.category.toLowerCase().includes(t)
    );
  }

  // price range
  const min = minPrice ? Number(minPrice) : undefined;
  const max = maxPrice ? Number(maxPrice) : undefined;
  if (!Number.isNaN(min as number) && min !== undefined) {
    out = out.filter(p => p.price >= (min as number));
  }
  if (!Number.isNaN(max as number) && max !== undefined) {
    out = out.filter(p => p.price <= (max as number));
  }

  // sorting
  switch (sort) {
    case 'price_asc':
      out.sort((a, b) => a.price - b.price);
      break;
    case 'price_desc':
      out.sort((a, b) => b.price - a.price);
      break;
    case 'rating_desc':
      out.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
      break;
    case 'rating_asc':
      out.sort((a, b) => (a.rating?.rate || 0) - (b.rating?.rate || 0));
      break;
    default:
      // relevance: keep API/default order
      break;
  }

  return out;
};

const Products: React.FC = () => {
  const [params] = useSearchParams();
  const [raw, setRaw] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch whenever category changes
  const category = params.get('category');

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const products = category && category.trim() !== ''
          ? await ApiService.getByCategory(category)
          : await ApiService.getAllProducts();
        if (!mounted) return;
        setRaw(products);
      } catch (e) {
        if (mounted) setError('Failed to load products');
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, [category]);

  const filtered = useMemo(() => {
    const q = params.get('q');
    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    const sort = (params.get('sort') as SortOption | null) || null;
    return applyClientFilters(raw, q, minPrice, maxPrice, sort);
  }, [params, raw]);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Products</h1>

      <ProductFilters />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <ProductGrid products={filtered} isLoading={loading} />
    </div>
  );
};

export default Products;
