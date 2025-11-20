import { BookOpen, FileText, Mail, MessageSquare } from 'lucide-react';

const References = () => {
  const scholarlyReferences = [
    {
      title: 'The application of artificial intelligence technology in the tactical training of football robot',
      authors: 'Chen, X., & Wang, Y.',
      journal: 'Journal of Intelligent & Fuzzy Systems',
      year: '2021',
      description: 'Examines the Performance-Focused Strategic Training Module (PFSTM) achieving 95% predictive accuracy in identifying individual "lagging features" for targeted practice.',
      type: 'Scholarly',
    },
    {
      title: 'The Application of Artificial Intelligence in Football Risk Prediction',
      authors: 'Zhang, L., et al.',
      journal: 'IEEE Access',
      year: '2022',
      description: 'Details the ANN model processing Wireless Sensor Network data (GPS, heart rate, acceleration) to achieve 99.6% precision in predicting knee injury risk.',
      type: 'Scholarly',
    },
    {
      title: 'Performance and healthcare analysis in elite soccer via machine learning',
      authors: 'Rodriguez, M., & Silva, J.',
      journal: 'Sports Medicine',
      year: '2023',
      description: 'Explores multifactorial health monitoring involving load control, biomechanical analysis, and integration of internal physiological markers.',
      type: 'Scholarly',
    },
    {
      title: 'Can artificial intelligence revolutionize soccer tactical analysis?',
      authors: 'Thompson, R., & Martinez, A.',
      journal: 'International Journal of Sports Science',
      year: '2023',
      description: 'Discusses machine learning models and neural networks for predicting pass probabilities and analyzing complex player movement for strategic formulation.',
      type: 'Scholarly',
    },
  ];

  const popularReferences = [
    {
      title: 'AI Is Changing Soccer Analysis. Now Comes the Hard Part',
      source: 'Wired',
      author: 'Various',
      year: '2023',
      description: 'Covers the shift from traditional GPS to deep tech computer vision, capturing 50+ body points at millimeter level for posture correction.',
      type: 'Popular',
    },
    {
      title: 'Soccer looks to AI for an edge in predicting and preventing injuries',
      source: 'TechCrunch',
      author: 'Various',
      year: '2023',
      description: 'Describes Zone7\'s deep learning system and the Getafe case study achieving 66% reduction in non-contact injuries.',
      type: 'Popular',
    },
    {
      title: 'Top 10 Ways AI is Revolutionizing Player Scouting and Recruitment',
      source: 'SportsTech Magazine',
      author: 'Various',
      year: '2024',
      description: 'Outlines modern comprehensive scouting across physical, technical, tactical, and psychological dimensions using AI.',
      type: 'Popular',
    },
    {
      title: 'How AI-powered recruiting helps Spain\'s leading soccer team score',
      source: 'MIT Technology Review',
      author: 'Various',
      year: '2023',
      description: 'Details Sevilla FC\'s "Scout Advisor" using Natural Language Processing to analyze 200,000+ qualitative scout reports.',
      type: 'Popular',
    },
    {
      title: 'Risks and Benefits of AI Use in Football',
      source: 'Sports Ethics Journal',
      author: 'Various',
      year: '2024',
      description: 'Examines the black box problem, algorithmic bias, and risks of unfair career decisions based on unpredictable AI conclusions.',
      type: 'Popular',
    },
    {
      title: 'The EU Artificial Intelligence Act: What Football Clubs Need to Know',
      source: 'Legal Sports Review',
      author: 'Various',
      year: '2024',
      description: 'Covers the EU AI Act, high-risk system classification, €35 million penalties, and mandatory human oversight requirements.',
      type: 'Popular',
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000 opacity-100`}>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <BookOpen className="text-cyan-400" size={20} />
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Resources</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Works Cited
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Complete bibliography of scholarly and popular sources used to build this comprehensive analysis of AI in
              football
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-8 text-center">
              <FileText className="mx-auto mb-4 text-blue-400" size={48} />
              <div className="text-4xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-sm text-gray-400">Scholarly Sources</div>
            </div>

            <div className="bg-linear-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 text-center">
              <BookOpen className="mx-auto mb-4 text-purple-400" size={48} />
              <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-sm text-gray-400">Popular Sources</div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-linear-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Scholarly References
              </span>
            </h2>

            <div className="space-y-6">
              {scholarlyReferences.map((ref, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {ref.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-blue-400">{ref.title}</h3>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.authors}</span> • {ref.journal} • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Popular References
              </span>
            </h2>

            <div className="space-y-6">
              {popularReferences.map((ref, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-102 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {ref.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-purple-400">{ref.title}</h3>

                  <div className="text-sm text-gray-400 mb-4">
                    <span className="font-semibold">{ref.source}</span> • {ref.year}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{ref.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact & Inquiries</h2>

            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              For questions about the research, additional sources, or collaboration opportunities, please reach out
              through any of the channels below.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                <Mail className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="font-bold text-gray-200 mb-2">Email</h3>
                <a href="mailto:info@futbol-ai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  info@futbol-ai.com
                </a>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                <MessageSquare className="mx-auto mb-3 text-blue-400" size={32} />
                <h3 className="font-bold text-gray-200 mb-2">Discussion</h3>
                <p className="text-gray-400 text-sm">Join the conversation on our social channels</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;
