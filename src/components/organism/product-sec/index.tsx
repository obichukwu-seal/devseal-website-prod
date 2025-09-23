import { Container } from "@/components/atom"
import { ArrowRight, Database, FileText, Brain, BarChart3, MessageSquare, Zap } from "lucide-react"
import Link from "next/link"
// from-slate-900 via-blue-900 to-slate-900 bg-gradient-to-br
export default function ProductSect() {
  return (
    <Container className="">
      {/* Navigation */}
      {/* <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-white font-semibold text-xl">devSEAL</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            About us
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Industries
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">
            Contact us
          </Link>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          Book a free consultation
        </button>
      </nav> */}

      {/* Hero Section */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Artificial Intelligence
                <br />
                <span className="text-blue-400">and Machine Learning</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with cutting-edge AI solutions. We build intelligent systems that drive
                innovation and efficiency.
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg flex items-center transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/80">AI</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Section - PensionData.ai */}
      <section className="px-6 py-20">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
            Featured Product
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet <span className="text-blue-400">PensionData.ai</span>
          </h2>
          <p className="text-[1.6rem] text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Revolutionary AI-powered pension data processing platform that transforms how pension fund administrators
            handle complex data workflows.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-white">Intelligent Pension Schedule Processing</h3>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Process pension schedules with unprecedented accuracy and speed using advanced AI technologies that
              understand complex pension data structures.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Multi-Source Ingestion
              </span>
              <span className="inline-flex items-center bg-purple-600/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Extraction
              </span>
              <span className="inline-flex items-center bg-green-600/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-[1.4rem] font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Intelligent Verification
              </span>
            </div>
            <Link
              href="https://www.pensiondata.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium text-[1.6rem] transition-colors"
            >
              Explore PensionData.ai
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm rounded-lg p-6">
              <div className="mb-4">
                <h4 className="text-white flex items-center text-lg font-semibold">
                  <Database className="w-6 h-6 mr-3 text-blue-400" />
                  Processing Pipeline
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Email, SFTP, S3, Azure ingestion</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-600/10 rounded-lg border border-purple-500/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Advanced OCR & NLP extraction</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-600/10 rounded-lg border border-green-500/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">AI validation & verification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <FileText className="w-6 h-6 mr-3 text-blue-400" />
                Multi-Format Ingestion
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Connect to SQL databases, Excel files, and flat files with automated data mapping for seamless
                integration.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <Brain className="w-6 h-6 mr-3 text-purple-400" />
                AI Data Processing
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Intelligent data cleaning, normalization, and enrichment powered by advanced machine learning
                algorithms.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <BarChart3 className="w-6 h-6 mr-3 text-green-400" />
                Predictive Analytics
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Advanced models predict future trends and identify potential risks in your pension data with high
                accuracy.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                Drag & Drop Designer
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Build custom reports and dashboards with an intuitive visual interface that requires no coding
                experience.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" />
                AI Conversation
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Ask data-related questions in plain English and get instant, accurate answers from your pension data.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-colors rounded-lg p-6">
            <div className="space-y-3">
              <h4 className="text-white flex items-center text-[1.4rem] font-semibold">
                <Database className="w-6 h-6 mr-3 text-orange-400" />
                Human Review Workflows
              </h4>
              <p className="text-gray-400 text-[1.8rem]">
                Smart workflows route uncertain extractions to human reviewers for validation with full audit trails.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Pension Data Processing?</h3>
          <p className="text-gray-300 mb-6 max-w-4xl mx-auto">
            Join leading pension fund administrators who trust PensionData.ai to streamline their operations and unlock
            valuable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.pensiondata.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg font-medium text-[1.6rem] transition-colors"

            >
              Visit PensionData.ai
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="border border-slate-600 text-white hover:bg-slate-800 bg-transparent px-8 py-6 rounded-lg font-medium text-[1.6rem] transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </Container>
  )
}
