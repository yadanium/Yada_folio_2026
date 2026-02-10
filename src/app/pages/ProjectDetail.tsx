import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p>プロジェクトが見つかりませんでした。</p>
        <Link to="/" className="text-[#0BA29A] hover:underline mt-4 inline-block">
          ホームに戻る
        </Link>
      </div>
    );
  }

  // 詳細画像がある場合はそれを使用、なければメイン画像のみ
  const images = project.detailImages || [project.image];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0BA29A] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        戻る
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <p className="text-sm text-[#0BA29A] mb-2">{project.category}</p>
        <h1 className="text-4xl mb-4">{project.title}</h1>
        
        <div className="flex gap-8 text-sm">
          <div>
            <p className="text-gray-500">クライアント</p>
            <p className="mt-1">{project.client}</p>
          </div>
          <div>
            <p className="text-gray-500">年度</p>
            <p className="mt-1">{project.year}</p>
          </div>
        </div>
      </motion.div>

      {/* 画像ギャラリー */}
      <div className="space-y-8 mb-12">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="w-full"
          >
            <img
              src={image}
              alt={`${project.title} - ${index + 1}`}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="prose max-w-none"
      >
        <p className="text-gray-700 leading-relaxed">{project.description}</p>
      </motion.div>
    </motion.div>
  );
}