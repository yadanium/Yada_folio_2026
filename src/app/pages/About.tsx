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
      {/* ヘッダー画像（左右余白なしで全面表示） */}
      <div className="w-full bg-gray-100">
        <img
          src={headerImage}
          alt="About header"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-[#0BA29A]"></span>
          About me
        </h1>

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
            「技術と人をつなぐデザイン」をモットーに、主に個人開発を行うエンジニアの方々<br/>
            とともにモノづくりに取り組んでいます。
            </p>
            <p>
            「アイデアや技術を魅力的に伝えたい」「手に取りたいと思ってもらえるクオリティにしたい」<br/>
            その"あと一歩"をサポートするため、丁寧な対話を重ねながら細部まで磨き上げます。
            </p>
            <p>
            開発者の想いが届くように、プロダクトを自信を持って世に送り出せるように、<br/>
            共に考え、伴走する存在でありたいと考えています。
            </p>
          </div>
        </div>

        {/* 略歴セクション */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#0BA29A]"></span>
            略歴
          </h2>
          <ul className="text-gray-700 leading-relaxed relative">
            {/* 最初のドット中心から最後のドット中心までの縦線 */}
            <span
              className="absolute w-0.5 bg-[#0BA29A]"
              style={{ left: "4px", top: "13px", bottom: "19px" }}
            ></span>
            <li className="flex gap-3 relative">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0BA29A] mt-2 shrink-0 z-10"></span>
              <span className="pb-5 pt-1.5">千葉工業大学 創造工学部 デザイン科学科卒業</span>
            </li>
            <li className="flex gap-3 relative">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0BA29A] mt-2 shrink-0 z-10"></span>
              <span className="pb-5 pt-1.5">慶應義塾大学大学院 政策・メディア研究科 XDプログラム在学中</span>
            </li>
            <li className="flex gap-3 relative">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0BA29A] mt-2 shrink-0 z-10"></span>
              <span className="pt-1.5">在学中にヤダニウムとして個人事業主を開業</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl mb-4 flex items-center gap-3 mt-4">
              <span className="w-1 h-6 bg-[#0BA29A]"></span>
              サービス
            </h2>
            <ul className="space-y-2">
              <li>• ロゴデザイン</li>
              <li>• パッケージデザイン</li>
              <li>• プロダクトデザイン</li>
              <li>• パンフレットデザイン</li>
              <li>• ノベルティ制作</li>
            </ul>
          </div>
          
          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl mb-4 flex items-center gap-3 mt-4">
              <span className="w-1 h-6 bg-[#0BA29A]"></span>
              意匠登録
            </h2>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2024.1.24</span>
                <a
                  href="https://www.j-platpat.inpit.go.jp/c1801/DE/JP-2023-014207/30/ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#0BA29A] hover:underline font-medium"
                >
                  意匠登録1762192号：排泄検知センサパッドカバー
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </li>
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2024.10.7</span>
                <a
                  href="https://www.j-platpat.inpit.go.jp/c1801/DE/JP-2024-000230/30/ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#0BA29A] hover:underline font-medium"
                >
                  意匠登録1781557号：ソリッドステートドライブケース
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-2xl mb-4 flex items-center gap-3 mt-8">
              <span className="w-1 h-6 bg-[#0BA29A]"></span>
              受賞歴
            </h2>
            <ul className="space-y-1">
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2024.10.16</span>
                <span>株式会社aba「Helppad2」(印字デザイン担当) 2024グッドデザイン賞 </span>
              </li>
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2024.3.23</span>
                <span>千葉工業大学 創造工学部 デザイン科学科 卒業制作 最優秀賞</span>
              </li>
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2024.3.18</span>
                <span>特許庁、文部科学省、日本弁理士会、独立行政法人工業所有権情報・研修館主催 デザインパテントコンテスト 優秀賞</span>
              </li>
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2023.12.27</span>
                <span>株式会社協同工芸社主催 看板おしゃれデザインコンペ2023 優秀賞</span>
              </li>
              <li className="flex items-center gap-2 py-0.5">
                <span className="text-sm text-gray-500 shrink-0">2023.4.3</span>
                <span>公益財団法人千葉市産業振興財団主催 千葉市元気企業ロゴマーク作品募集 優秀賞</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl mb-4 flex items-center gap-3 mt-4">
              <span className="w-1 h-6 bg-[#0BA29A]"></span>
              メディア
            </h2>
            <ul className="space-y-1">
              {mediaItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 py-0.5">
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

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-2xl mb-6 flex items-center gap-3 mt-4">
              <span className="w-1 h-6 bg-[#0BA29A]"></span>
              Contact
            </h2>
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
