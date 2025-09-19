import Link from 'next/link';

// This is a simplified example. In a real application, you would
// fetch the details of the product based on the `product` parameter.
interface ProductPageProps {
  params: {
    product: string;
  };
}

export async function generateStaticParams() {
  const products = ['team-jersey', 'championship-hat', 'sports-water-bottle'];
  return products.map(product => ({ product }));
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={`https://placehold.co/600x600/1e293b/a5f3fc?text=${params.product.replace(/-/g, ' ')}`}
          alt={params.product.replace(/-/g, ' ')}
          className="w-full h-auto rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4 capitalize">{params.product.replace(/-/g, ' ')}</h1>
          <p className="text-green-400 text-3xl font-bold mb-6">$79.99</p>
          <p className="text-gray-300 mb-6">
            This is a detailed description of the product. It can include material,
            sizing information, features, and other details to help the customer
            make a purchasing decision. In a real app, this data would come from your database.
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold py-4 px-8 rounded-full text-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/store" className="text-blue-400 hover:text-blue-300 font-bold">
          &larr; Back to Store
        </Link>
      </div>
    </div>
  );
}

