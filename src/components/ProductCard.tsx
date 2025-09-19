import Link from 'next/link';

const featuredProducts = [
  { slug: 'team-jersey', name: 'Official Team Jersey', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Jersey', price: '$79.99' },
  { slug: 'championship-hat', name: 'Championship Hat', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Hat', price: '$29.99' },
  { slug: 'sports-water-bottle', name: 'Sports Water Bottle', image: 'https://placehold.co/400x400/1e293b/a5f3fc?text=Bottle', price: '$19.99' },
];

export default function StoreSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      {featuredProducts.map(product => (
        <div key={product.slug} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
          <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-green-400 text-lg font-bold mb-4">{product.price}</p>
          <Link href={`/store/${product.slug}`} className="inline-block bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold py-2 px-6 rounded-full">
            Shop Now
          </Link>
        </div>
      ))}
    </div>
  );
}

