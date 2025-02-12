import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/data/products'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/furniture1.jpg"
            alt="Modern Furniture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Modern Living Room Sets</h1>
              <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}