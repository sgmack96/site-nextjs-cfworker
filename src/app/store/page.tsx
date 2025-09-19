import Link from 'next/link';

// Placeholder data for store products.
const products = [
  { slug: 'team-jersey', name: 'Official Team Jersey', price: '$79.99', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Jersey' },
  { slug: 'championship-hat', name: 'Championship Hat', price: '$29.99', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Hat' },
  { slug: 'sports-water-bottle', name: 'Sports Water Bottle', price: '$19.99', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Bottle' },
];

export default function StoreHome() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop the Official Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.slug} className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
            <p className="text-green-400 font-bold text-xl mb-4">{product.price}</p>
            <Link href={`/store/${product.slug}`} className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold py-2 px-6 rounded-full">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

