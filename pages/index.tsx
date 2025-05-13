import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface Product {
  id: string
  name: string
  brand: string
  type: string
  description: string
  price: number
  image_url: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase fetch error:', error)
      } else {
        setProducts(data || [])
      }
    }
    loadProducts()
  }, [])

  return (
    <div className="min-h-screen bg-green-600 text-white">
      {/* Navbar */}
      <header className="bg-green-800 shadow mb-10">
        <div className="max-w-5xl mx-auto py-6 px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-widest text-white">PING PANG PARIS</h1>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <div key={product.id} className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <img
                src={product.image_url || 'https://via.placeholder.com/300'}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold mb-1 text-center">{product.name}</h2>
              <p className="text-sm italic text-gray-600 text-center mb-3">{product.description}</p>
              <p className="text-2xl font-semibold text-green-700 text-center">€{product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
