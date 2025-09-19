import Link from 'next/link';

const latestPosts = [
  { slug: 'nfl-season-preview', title: 'NFL Season Preview', summary: 'A deep dive into the upcoming NFL season and who to watch.' },
  { slug: 'epl-transfer-analysis', title: 'EPL Transfer Analysis', summary: 'Examining the biggest moves in the English Premier League.' },
  { slug: 'march-madness-predictions', title: 'March Madness Predictions', summary: 'Our expert picks for the NCAA Basketball tournament.' },
];

export default function BlogSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {latestPosts.map(post => (
        <div key={post.slug} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-400 mb-4">{post.summary}</p>
          <Link href={`/blog/${post.slug}`} className="text-blue-400 hover:underline font-semibold">
            Read more &rarr;
          </Link>
        </div>
      ))}
    </div>
  );
}

