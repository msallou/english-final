import { Users, Search, TrendingUp, DollarSign, Target, FileText, BarChart3 } from 'lucide-react';

const Strategy = () => {
  const scoutingDimensions = [
    {
      icon: Activity,
      title: 'Physical',
      metrics: ['Sprint speed', 'Endurance capacity', 'Strength metrics', 'Agility scores'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Technical',
      metrics: ['Ball control', 'Passing accuracy', 'Shooting precision', 'First touch quality'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Tactical',
      metrics: ['Positioning IQ', 'Decision making', 'Game reading', 'Spatial awareness'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Psychological',
      metrics: ['Mental resilience', 'Team chemistry', 'Leadership qualities', 'Competitive drive'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
              <Users className="text-blue-400" size={20} />
              <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Pillar 3</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Strategy & Recruitment
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The shift from subjective scouting to objective, data-driven recruitment and strategic decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                200K+
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Scout Reports Analyzed</div>
              <div className="text-xs text-gray-500">Sevilla FC&apos;s AI-powered system</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
                90%
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Time Reduction</div>
              <div className="text-xs text-gray-500">In qualitative data processing</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
                4D
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Analysis Dimensions</div>
              <div className="text-xs text-gray-500">Physical, Technical, Tactical, Psychological</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                The End of Gut Instinct: Comprehensive Scouting
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              Modern AI systems process massive data volumes to predict potential and career trajectories, identifying
              undervalued players that traditional scouting methods miss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {scoutingDimensions.map((dimension, index) => {
              const Icon = dimension.icon;
              return (
                <div
                  key={dimension.title}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-opacity-100 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${dimension.color} bg-opacity-20 mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">{dimension.title}</h3>

                  <ul className="space-y-2">
                    {dimension.metrics.map((metric) => (
                      <li key={metric} className="flex items-start space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${dimension.color} mt-2 shrink-0`} />
                        <span className="text-sm text-gray-400">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Methodology: Data-Driven Discovery</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="text-blue-400" size={28} />
                  <h4 className="text-xl font-bold text-blue-400">Massive Data Processing</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  AI systems analyze thousands of players across multiple leagues simultaneously, processing performance
                  data, match statistics, and video footage to identify promising talent.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Global player database monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Real-time performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Comparative analysis across leagues</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="text-purple-400" size={28} />
                  <h4 className="text-xl font-bold text-purple-400">Predictive Modeling</h4>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Machine learning algorithms predict career trajectories and potential development paths, identifying
                  players likely to exceed their current valuation.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>Development curve projection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>Market value forecasting</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span>Performance ceiling estimation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500">
              Source: Top 10 Ways AI is Revolutionizing Player Scouting and Recruitment
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Generative AI for Qualitative Decisions
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <div className="bg-linear-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="text-green-400" size={32} />
                  <h3 className="text-2xl font-bold text-green-400">Sevilla FC Case Study</h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Sevilla FC implemented &quot;Scout Advisor,&quot; an AI-powered system using Natural Language Processing (NLP)
                  to efficiently analyze over 200,000 qualitative scout reports.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Qualitative Analysis</div>
                    <p className="text-gray-400 text-sm">
                      The system processes subjective assessments like player attitude, character, team fit, and
                      leadership potential—factors that are crucial but difficult to quantify.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">High-Stakes Decisions</div>
                    <p className="text-gray-400 text-sm">
                      By combining quantitative metrics with qualitative insights, clubs make more informed decisions on
                      multi-million euro transfers and contract negotiations.
                    </p>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-lg font-semibold text-gray-200 mb-2">Efficiency Gains</div>
                    <p className="text-gray-400 text-sm">
                      What previously took weeks of manual analysis now happens in hours, allowing scouting departments
                      to act faster in competitive transfer markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-bold mb-4 text-cyan-400">Key Qualitative Factors</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Player Attitude',
                    'Work Ethic',
                    'Team Chemistry',
                    'Leadership',
                    'Adaptability',
                    'Mental Strength',
                    'Cultural Fit',
                    'Communication',
                  ].map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-sm text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-bold mb-4 text-purple-400">NLP Capabilities</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">
                      Sentiment analysis of scout observations
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">Pattern recognition across multiple reports</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">Consistency verification between observers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <span className="text-gray-300 text-sm">Red flag identification and risk assessment</span>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-gray-500 text-center">
                Source: How AI-powered recruiting helps Spain&apos;s leading soccer team score
              </div>
            </div>
          </div>

          <div className="bg-linear-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Financial Optimization</h2>

            <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
              AI informs the business side of player acquisition through predictive models for transfer market analysis,
              contract valuation, and return on investment maximization.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <DollarSign className="text-yellow-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-yellow-400">Transfer Market Analysis</h4>
                <p className="text-sm text-gray-400 text-center">
                  Predictive models assess fair market value and identify undervalued assets in the transfer market
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="text-orange-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-orange-400">Contract Valuation</h4>
                <p className="text-sm text-gray-400 text-center">
                  Data-driven assessment of player worth ensures competitive yet financially sustainable contract offers
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="text-red-400" size={40} />
                </div>
                <h4 className="text-lg font-bold text-center mb-3 text-red-400">ROI Maximization</h4>
                <p className="text-sm text-gray-400 text-center">
                  Strategic player acquisition balances immediate performance needs with long-term financial returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Activity = TrendingUp;

export default Strategy;
