import {
  ArticlesData,
  fetchArticles,
  fetchKategories,
  KategoriData,
} from "../../service/apiServices";
import { useQuery } from "@tanstack/react-query";

const Detail = () => {
  const { data: dataArticles } = useQuery<ArticlesData[]>({
    queryKey: ["dataArticles"],
    queryFn: fetchArticles,
  });

  const { data: dataKategori } = useQuery<KategoriData[]>({
    queryKey: ["dataKategori"],
    queryFn: fetchKategories,
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Articles Section - Span 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {dataArticles?.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={`http://localhost:1337/${item.cover.url}`}
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    alt="feature animation"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item?.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {item?.description}
                    </p>
                    <ul role="list" className="space-y-2">
                      {item?.slug
                        .split("-")
                        .filter((feature) => feature.trim() !== "")
                        .map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-500 dark:text-gray-400">
                              {feature.trim()}
                            </span>
                          </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.publishedAt}</span>
                      <span>By {item.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Section - Aligned to the end */}
          <div className="space-y-8 self-end">
            {dataKategori?.map((item, index) => (
              <div
                key={index}
                className="p-6 max-w-xs bg-white rounded-lg shadow-lg dark:bg-gray-900 mx-auto"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Category
                </h2>
                <a
                  href={"#"}
                  className="block dark:bg-slate-50 rounded-md text-center p-2"
                >
                  <p className="text-gray-500 dark:text-dark-400">
                    {item.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
