import { Scale, AlertTriangle, Shield, Eye, FileCheck, Users } from 'lucide-react';

const Ethics = () => {
  const risks = [
    {
      title: 'Algorithmic Bias',
      description: 'AI models trained on historical data may perpetuate existing biases, leading to unfair evaluation of players from underrepresented backgrounds.',
      severity: 'Critical',
      color: 'red',
    },
    {
      title: 'Black Box Decision-Making',
      description: 'Complex neural networks make decisions through processes that are difficult or impossible to explain, creating accountability challenges.',
      severity: 'High',
      color: 'orange',
    },
    {
      title: 'Privacy Concerns',
      description: 'Extensive biometric and behavioral data collection raises questions about player consent, data ownership, and potential misuse.',
      severity: 'High',
      color: 'yellow',
    },
    {
      title: 'Career Impact',
      description: 'AI-driven decisions about player potential can have permanent effects on career opportunities without opportunity for appeal or human reconsideration.',
      severity: 'Critical',
      color: 'red',
    },
  ];

  const requirements = [
    {
      icon: FileCheck,
      title: 'Explicit Consent',
      description: 'Clubs must obtain clear, informed consent from players before collecting and processing biometric data.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Human Oversight',
      description: 'Qualified personnel must review all AI recommendations before implementation to prevent rights violations.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Decision-making processes must be explainable and players have the right to understand how AI impacts their careers.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Regular Audits',
      description: 'Independent audits of AI systems to identify and correct bias, ensure fairness, and verify compliance.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className={`relative pt-20 transition-opacity duration-1000`}>
      <div className="absolute inset-0 bg-linear-to-b from-red-950/20 via-transparent to-transparent pointer-events-none" />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 bg-linear-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30">
              <Scale className="text-orange-400" size={20} />
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">Pillar 4</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Ethics & Regulation
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              The critical counter-argument: addressing future challenges of legal compliance and responsible AI use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-3">
                €35M
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Maximum Penalty</div>
              <div className="text-xs text-gray-500">EU AI Act non-compliance fine</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-3">
                High
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Risk Classification</div>
              <div className="text-xs text-gray-500">Biometric data decisions</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent mb-3">
                100%
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Oversight Required</div>
              <div className="text-xs text-gray-500">Human review mandatory</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                The Black Box Problem & Inherent Bias
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
              The &quot;They Say&quot; — Understanding the risks and challenges that demand careful consideration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {risks.map((risk, index) => (
              <div
                key={risk.title}
                className={`bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-${risk.color}-500/30 hover:border-${risk.color}-500/60 transition-all duration-500 hover:scale-102 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`text-${risk.color}-400`} size={28} />
                    <h3 className="text-xl font-bold">{risk.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${risk.color}-500/20 text-${risk.color}-400 border border-${risk.color}-500/30`}>
                    {risk.severity}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center text-red-400">Understanding the Black Box</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-200">The Problem</h4>
                <p className="text-gray-300 leading-relaxed">
                  Modern AI systems, particularly deep neural networks, operate through millions of interconnected
                  parameters that process data in ways even their creators cannot fully explain.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-200 mb-3">Consequences:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Unpredictable conclusions about player potential</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Inability to challenge or appeal decisions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Hidden biases affecting career opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Lack of accountability for incorrect predictions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-200">Algorithmic Bias Risk</h4>
                <p className="text-gray-300 leading-relaxed">
                  AI systems trained on historical data inherit the biases present in that data, potentially
                  perpetuating discrimination in player evaluation and career decisions.
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-200 mb-3">Bias Sources:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Historical underrepresentation in training data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Socioeconomic factors affecting opportunity access</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Cultural biases in subjective assessments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Geographic disparities in scouting coverage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              Source: Risks and Benefits of AI Use in Football
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Legal Compliance and High-Risk Systems
              </span>
            </h2>
          </div>

          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12 mb-20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">The EU Artificial Intelligence Act</h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The European Union has established comprehensive regulations governing AI systems, with severe financial
                penalties for non-compliance in high-risk applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-blue-400 mb-4">High-Risk Classification</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  AI systems that make decisions affecting a player&apos;s future based on biometric data are classified as
                  High Risk under the EU AI Act.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">Career opportunity decisions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">Contract renewal recommendations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">Transfer market valuations</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">Recruitment selections</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Financial Penalties</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Non-compliance with the AI Act can result in fines of up to €35 million or 7% of global annual
                  turnover, whichever is higher.
                </p>
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">€35M</div>
                  <div className="text-sm text-gray-400 mb-4">Maximum Penalty Amount</div>
                  <p className="text-xs text-gray-500">
                    For prohibited AI practices or non-compliance with high-risk system requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Mandatory Human Oversight
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              The non-negotiable ethical requirements for clubs implementing AI systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <div
                  key={requirement.title}
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-opacity-100 transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-linear-to-br ${requirement.color} bg-opacity-20 mb-4`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{requirement.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{requirement.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-linear-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Key Compliance Requirements</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">Data Protection</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Explicit consent for biometric data collection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Right to data access and deletion</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Secure data storage and transmission</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Regular privacy impact assessments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-blue-400 mb-3">Transparency</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Explainable AI decision-making processes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Documentation of AI system logic</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Player notification of AI use</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Clear communication of limitations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-purple-400 mb-3">Human Control</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Qualified personnel oversight</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Ability to override AI recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Regular audit and review processes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Appeal mechanisms for players</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Conclusion: The Path Forward</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              AI is a powerful force for competitive gain in modern football, but its longevity and ethical legitimacy
              hinge entirely on transparency, accountability, and responsible governance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">The Opportunity</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Clubs that implement AI responsibly gain unprecedented competitive advantages through injury
                  prevention, strategic recruitment, and performance optimization while maintaining ethical standards
                  and regulatory compliance.
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-3">The Responsibility</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Success requires mandatory human oversight, transparent decision-making, regular bias audits, and
                  unwavering commitment to player rights and data protection under evolving regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;
