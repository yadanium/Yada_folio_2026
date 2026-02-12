import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "motion/react";
import { HeroSlideshow } from "../components/HeroSlideshow";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

  // カテゴリーのリストを固定
  const categories = [
    "すべて",
    "プロダクトデザイン",
    "グラフィックデザイン",
    "ロゴデザイン",
    "プロジェクト",
    "ブックデザイン",
    "その他",
  ];

  // フィルタリングされた作品
  const filteredProjects =
    selectedCategory === "すべて"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // 制作年順（新しい順）にソート
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(b.year) - Number(a.year)
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
        {/* フィルターボタン */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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
    </motion.div>
  );
}