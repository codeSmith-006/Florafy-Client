import { Leaf, Droplet, Recycle, Flower2 } from 'lucide-react';

const ExploreCategories = () => {
  return (
<section className="py-12 px-4 md:px-12 bg-white text-gray-800 dark:bg-[#101828] dark:text-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#38A57E]">
      Explore Gardening Categories
    </h2>
    <p className="mb-10 text-gray-600 dark:text-gray-300">
      Whether you're a beginner or a pro, there's something for everyone.
    </p>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Leaf size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Indoor Gardening</h3>
          <p className="text-center text-sm">
            Tips and tricks for growing plants inside your home or apartment.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Droplet size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hydroponics</h3>
          <p className="text-center text-sm">
            Dive into soil-free gardening and learn about nutrient solutions.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Recycle size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Composting</h3>
          <p className="text-center text-sm">
            Turn kitchen scraps into rich soil for a sustainable garden.
          </p>
        </div>
      </div>

      <div className="card bg-white dark:bg-[#101828] border border-gray-200 dark:border-gray-700 shadow-md p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col items-center">
          <Flower2 size={36} className="text-[#38A57E] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Flower Gardening</h3>
          <p className="text-center text-sm">
            Learn how to plant and care for beautiful blooms all year round.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ExploreCategories;

