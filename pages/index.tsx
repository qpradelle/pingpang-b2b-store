import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useCart } from '../lib/CartContext'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  brand: string
  type: string
  description: string
  price: number
  image_url: string | null
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const { addToCart, cart } = useCart()

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
    <div className="min-h-screen bg-green-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-green-700 shadow mb-10">
        <div className="max-w-5xl mx-auto py-6 px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-widest text-white mb-2">PING PANG PARIS</h1>
          <Link href="/basket">
            <span className="relative inline-block text-white text-sm underline">
              🛒 View Basket
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-white text-green-800 font-bold text-xs rounded-full px-2 py-0.5 shadow">
                  {cart.length}
                </span>
              )}
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => {
            const image = product.image_url?.trim() || `https://picsum.photos/seed/${i}/400/300`
            return (
              <div key={product.id} className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <img src={image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                <h2 className="text-xl font-bold mb-1 text-center">{product.name}</h2>
                <p className="text-sm italic text-gray-600 text-center mb-3">{product.description}</p>
                <p className="text-2xl font-semibold text-green-700 text-center mb-3">€{product.price.toFixed(2)}</p>
                <button
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded w-full"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image_url: image,
                    })
                  }
                >
                  Add to Basket
                </button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
