import { useCart } from '../lib/CartContext'
import Link from 'next/link'

export default function BasketPage() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="min-h-screen bg-green-50 text-gray-900 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Basket</h1>
        <Link href="/" className="text-green-700 underline block mb-6 text-center">← Back to Shop</Link>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your basket is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, i) => (
              <div key={i} className="flex items-center bg-white rounded shadow p-4">
                <img src={item.image_url} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-green-700 font-bold">€{item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right text-xl font-semibold text-green-800 pt-4 border-t">
              Total: €{total.toFixed(2)}
            </div>

            <button className="bg-green-700 text-white py-3 px-6 rounded w-full mt-4 hover:bg-green-800">
              Proceed to Checkout (coming soon)
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
