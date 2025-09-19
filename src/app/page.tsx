import LiveScoreBoard from '../components/LiveScoreBoard';
import BlogSection from '../components/BlogSection';
import StoreSection from '../components/StoreSection';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
          Live Scores & Highlights
        </h1>
        <LiveScoreBoard />
      </section>

      <section className="bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Latest on the Blog
        </h2>
        <BlogSection />
      </section>

      <section className="bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Our Team Store
        </h2>
        <StoreSection />
      </section>
    </div>
  );
}
