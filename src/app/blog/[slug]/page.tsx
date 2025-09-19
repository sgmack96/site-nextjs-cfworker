import Link from 'next/link';

// This is a simplified example. In a real application, you would
// fetch the content of the blog post based on the `slug` parameter.
interface BlogPostProps {
  params: {
    slug: string;
  };
}

// Generates static paths for pre-rendering
export async function generateStaticParams() {
  const slugs = ['nfl-season-preview', 'epl-transfer-analysis', 'march-madness-predictions'];
  return slugs.map(slug => ({ slug }));
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 capitalize">{params.slug.replace(/-/g, ' ')}</h1>
      <p className="text-gray-400 mb-8">Published on September 19, 2025</p>

      <article className="prose prose-invert max-w-none text-gray-300">
        <p>
          This is the full content of the blog post. In a real application, you would
          fetch this content from a database or a headless CMS using the 
          <code className="bg-gray-700 rounded p-1 text-sm">{`params.slug`}</code>.
        </p>
        <p>
          You could include multiple paragraphs, images, and other media here. This dynamic route
          allows you to have a single component handle all of your blog posts.
        </p>
      </article>

      <div className="mt-8">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 font-bold">
          &larr; Back to Blog
        </Link>
      </div>
    </div>
  );
}
