import { Container } from "@/components/atom"


type Props = {}

export const ClientSection = (props: Props) => {

  return (
    <Container className=" px-6 py-20 space-y-[10rem]">
    <div className="text-center mb-16">
      <span className="inline-block mb-4 bg-purple-600/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
        Trusted Partners
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Trusted by <span className="text-blue-400">Industry Leaders</span>
      </h2>
      <p className="text-[1.6rem] text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Leading organizations across finance, healthcare, and technology trust devSEAL to deliver cutting-edge AI
        solutions that drive real business results.
      </p>
    </div>

    {/* Client Logos Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
      {[
        { name: "TechCorp", logo: "TC" },
        { name: "FinanceFirst", logo: "FF" },
        { name: "DataSystems", logo: "DS" },
        { name: "CloudTech", logo: "CT" },
        { name: "InnovateLab", logo: "IL" },
        { name: "FutureAI", logo: "FA" },
      ].map((client, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-6 bg-slate-800/30 border border-slate-700 rounded-lg hover:bg-slate-800/50 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{client.logo}</span>
            </div>
            <span className="text-gray-300 font-medium">{client.name}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Client Testimonials */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 italic">
            {"devSEAL transformed our data processing capabilities. Their AI solutions reduced our processing time by 80% while improving accuracy significantly."}
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">JS</span>
            </div>
            <div>
              <p className="text-white font-medium">Vjay Partel</p>
              <p className="text-gray-400 text-sm">CTO, Sulos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 italic">
            {"The pension data processing platform exceeded our expectations. The AI-powered insights have revolutionized how we handle complex financial data."}
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">MJ</span>
            </div>
            <div>
              <p className="text-white font-medium">Shoday </p>
              <p className="text-gray-400 text-sm">Director, FinanceFirst</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-300 italic">
            {"Outstanding AI implementation and support. devSEAL's machine learning models have improved our operational efficiency by 300%."}
          </p>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">RW</span>
            </div>
            <div>
              <p className="text-white font-medium">Robert Wilson</p>
              <p className="text-gray-400 text-sm">VP Engineering, DataSystems</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
        <div className="text-gray-300">Enterprise Clients</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
        <div className="text-gray-300">Uptime Guarantee</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
        <div className="text-gray-300">Processing Speed Increase</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
        <div className="text-gray-300">Expert Support</div>
      </div>
    </div>
  </Container>
  )
}