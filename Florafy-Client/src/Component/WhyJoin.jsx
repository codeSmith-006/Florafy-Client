import { Users, Sprout, Star, HeartHandshake } from 'lucide-react';

const WhyJoinUs = () => {
  return (
<section className="py-12 px-4 md:px-12 bg-white text-gray-800 dark:bg-[#101828] dark:text-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38A57E]">
      Why Join Our Gardening Community?
    </h2>
    <p className="mb-10 text-gray-600 dark:text-gray-300">
      Discover the benefits of connecting with passionate gardeners like you!
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Users size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Connect with Gardeners</h3>
          <p className="text-center text-sm">
            Meet fellow plant lovers, share tips, and grow together.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Sprout size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Grow Your Knowledge</h3>
          <p className="text-center text-sm">
            Access curated gardening tips, guides, and seasonal advice.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Star size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Get Featured</h3>
          <p className="text-center text-sm">
            Share your garden, inspire others, and become a featured gardener.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <HeartHandshake size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
          <p className="text-center text-sm">
            Get help, give advice, and enjoy a warm, welcoming space.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default WhyJoinUs;
