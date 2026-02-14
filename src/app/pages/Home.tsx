import { useEffect, useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { HeroSlideshow } from "../components/HeroSlideshow";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Footer } from "../components/Footer";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

  const scrollToFilters = () => {
    const el = document.getElementById("works-filters");
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const absoluteY = rect.top + window.scrollY;

    window.scrollTo({
      top: absoluteY,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    scrollToFilters();
  };

  // ProjectDetail から戻ってきたときに、前回のスクロール位置に戻す
  useEffect(() => {
    const saved = sessionStorage.getItem("homeScrollY");
    if (saved) {
      const y = Number(saved);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: y, behavior: "auto" });
      }
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  // カテゴリーのリストを固定
  const categories = [
    "すべて",
    "プロジェクト",
    "プロダクト",
    "グラフィック",
    "ロゴ",
    "ビデオ",
    "その他",
  ];

  // フィルタリングされた作品
  const filteredProjects =
    selectedCategory === "すべて"
      ? projects
      : projects.filter((p) => p.category.includes(selectedCategory));

  // 制作年順（新しい順）→ 同年内は priority 昇順にソート
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(b.year) - Number(a.year) || a.priority - b.priority
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ヒーロースライドショー */}
      <HeroSlideshow />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Works見出し */}
        <h2 className="text-2xl mb-6 flex items-center gap-3 font-bold">
          <span className="w-1 h-6 bg-[#0BA29A]"></span>
          Works
        </h2>

        {/* フィルターボタン */}
        <div
          id="works-filters"
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-[#0BA29A] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* プロジェクトグリッド（制作年順） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </motion.div>
  );
}