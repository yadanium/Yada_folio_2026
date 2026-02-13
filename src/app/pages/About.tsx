import { Mail, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Footer } from "../components/Footer";
import { mediaItems } from "../data/media";

const headerImage = "/images/common/header2.png";
const profileImage = "/images/common/profile.png";

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
        <h1 className="text-4xl mb-8">About me</h1>

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
            <br/>
            <h2 className="text-2xl mb-4">矢田 美涼 / Yada Misuzu</h2>
            <p>
              千葉工業大学 創造工学部 デザイン科学科卒業、慶應義塾大学大学院 政策・メディア研究科 XDプログラム在学中。<br/>
              在学中にヤダニウムとして個人事業主を開業。
            </p>  
            <p>
              「技術と人をつなぐデザイン」をモットーに、個人開発を行うエンジニアの方々と一緒にものづくりをしています。
            </p>
            <p>
            
            </p>
          </div>
        </div>
      
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
          アイデアや技術はあるけれど、どう伝えればいいか分からない。世界観はあるけれど、表現するのが難しい。<br/>
          そういったあと一歩をサポートするべく、丁寧にお話を伺い、ロゴ、パンフレット、パッケージ、製品外装など、最終的な仕上がりまで共に整えていきます。<br/>
          <br/>
          開発者の想いがきちんと届くように。プロダクトが自分らしい姿で世に出てゆけるように。<br/>
          隣で一緒に考える存在でありたいと思っています。<br/>
          </p>
        
          
          <div className="pt-8">
            <h2 className="text-2xl mb-4">サービス</h2>
            <ul className="space-y-2">
              <li>• ロゴデザイン</li>
              <li>• パッケージデザイン</li>
              <li>• プロダクトデザイン</li>
              <li>• パンフレットデザイン</li>
              <li>• ノベルティ制作</li>
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

          <div className="pt-8">
            <h2 className="text-2xl mb-4">メディア</h2>
            <ul className="space-y-4">
              {mediaItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-500 shrink-0">{item.date}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0BA29A] hover:underline font-medium"
                  >
                    {item.title}
                    <ExternalLink className="w-4 h-4 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
            {mediaItems.length === 0 && (
              <p className="text-gray-500 text-sm">掲載情報はありません。</p>
            )}
          </div>

          <div className="pt-12 border-t border-gray-200 mt-12">
            <h2 className="text-2xl mb-6">Contact</h2>
            <p className="mb-8">
              プロジェクトのご相談やご質問など、お気軽にお問い合わせください。
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#0BA29A] mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>yadamisuzu3122@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/icons/twitter.svg" alt="Twitter" className="w-5 h-5 mt-1 shrink-0 object-contain" />
                <div>
                  <p className="text-sm text-gray-500">Twitter</p>
                  <a href="https://x.com/yada_kaeru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-inherit hover:underline">
                    @yada_kaeru
                    <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/icons/discord.svg" alt="Discord" className="w-5 h-5 mt-1 shrink-0 object-contain" />
                <div>
                  <p className="text-sm text-gray-500">Discord</p>
                  <p>@yadanium</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img src="/images/icons/github.svg" alt="GitHub" className="w-5 h-5 mt-1 shrink-0 object-contain" />
                <div>
                  <p className="text-sm text-gray-500">Github</p>
                  <a href="https://github.com/yadanium" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-inherit hover:underline">
                    github.com/yadanium
                    <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <Footer />
    </motion.div>
  );
}