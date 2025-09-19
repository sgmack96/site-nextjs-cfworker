import Link from 'next/link';

// Placeholder data for blog posts.
const posts = [
  { slug: 'nfl-season-preview', title: 'NFL Season Preview', summary: 'A deep dive into the upcoming NFL season and who to watch.' },
  { slug: 'epl-transfer-analysis', title: 'EPL Transfer Analysis', summary: 'Examining the biggest moves in the English Premier League.' },
  { slug: 'march-madness-predictions', title: 'March Madness Predictions', summary: 'Our expert picks for the NCAA Basketball tournament.' },
];

export default function BlogHome() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">The Sports Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.slug} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.summary}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:text-blue-300 font-bold">
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

