import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

const headerImage = "/images/about-header.jpg";
const profileImage = "/images/profile.png";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {/* ヘッダー画像 */}
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-100">
        <img
          src={headerImage}
          alt="About header"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl mb-8">About</h1>

        {/* プロフィールセクション */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <img
              src={profileImage}
              alt="プロフィール写真"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="md:w-2/3 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl mb-4">デザイナー /ごはんやさん</h2>
            <p>
              東京を拠点に活動するデザイナー。武蔵野美術大学卒業後、国内外のデザインスタジオで経験を積み、2020年に独立。
            </p>
            <p>
              「デザインで人々の生活を豊かにする」をモットーに、建築、インテリア、グラフィックデザインなど幅広い分野で活動しています。
            </p>
          </div>
        </div>
      
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            私たちは、デザインと技術を融合させ、人々の生活を豊かにするクリエイティブスタジオです。
            建築、インテリア、グラフィックデザイン、写真など、幅広い分野で活動しています。
          </p>
          
          <p>
            クライアントのビジョンを形にし、美しく機能的なデザンを提供することを使命としています。
            細部へのこだわりと革新的なアプローチで、常に期待を超える成果を目指しています。
          </p>
          
          <div className="pt-8">
            <h2 className="text-2xl mb-4">サービス</h2>
            <ul className="space-y-2">
              <li>• 建築設計</li>
              <li>• インテリアデザイン</li>
              <li>• グラフィックデザイン</li>
              <li>• プロダクトデザイン</li>
              <li>• 写真撮影</li>
              <li>• ブランディング</li>
            </ul>
          </div>
          
          <div className="pt-8">
            <h2 className="text-2xl mb-4">受賞歴</h2>
            <ul className="space-y-2">
              <li>2025 - Good Design Award</li>
              <li>2024 - Architecture Excellence Award</li>
              <li>2024 - Design Innovation Prize</li>
            </ul>
          </div>

          <div className="pt-12 border-t border-gray-200 mt-12">
            <h2 className="text-2xl mb-6">Contact</h2>
            <p className="mb-8">
              プロジェクトのご相談やご質問など、お気軽にお問い合わせください。
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#0BA29A] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>info@portfolio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#0BA29A] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>03-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#0BA29A] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p>東京都渋谷区1-2-3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}