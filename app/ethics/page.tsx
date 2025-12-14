import { Scale, AlertTriangle, Shield, Eye, FileCheck, Users } from 'lucide-react';

const Ethics = () => {
  // Mapping Source names (matching annotated bibliography)
  const sourceMapping = {
    FCB: "FCBarcelona.com, 2025", // Source 6
  };

  // RISKS (Derived from FCBarcelona.com)
  const risks = [
    {
      title: 'Black Box Decision-Making',
      description: 'The algorithms used are often so complex that it is difficult to interpret them, creating accountability challenges and making AI conclusions unpredictable.',
      severity: 'High Risk',
      color: 'orange',
      source: sourceMapping.FCB,
    },
    {
      title: 'Algorithmic Bias',
      description: 'AI, as a reflection of human knowledge, inherits human flaws. This risk involves systems becoming discriminatory and perpetuating biases, which clubs must monitor.',
      severity: 'High Risk',
      color: 'red',
      source: sourceMapping.FCB,
    },
    {
      title: 'Privacy Concerns',
      description: 'The extensive collection of data is contentious. Hacker attacks on player data can be highly detrimental to their privacy and professional careers.',
      severity: 'High Risk',
      color: 'yellow',
      source: sourceMapping.FCB,
    },
    {
      title: 'Career Impact',
      description: 'AI decisions regarding a player’s continuity or transfer based on statistics and performance projections are a sensitive area classified as High Risk.',
      severity: 'Critical',
      color: 'red',
      source: sourceMapping.FCB,
    },
  ];

  // REQUIREMENTS (Derived from EU AI Act mandates, per FCBarcelona.com)
  const requirements = [
    {
      icon: FileCheck,
      title: 'Explicit Consent',
      description: 'The player must agree to the club using their biometric data for performance analysis under the legal basis of consent.',
      color: 'from-blue-500 to-cyan-500',
      source: sourceMapping.FCB,
    },
    {
      icon: Eye,
      title: 'Human Oversight',
      description: 'Clubs must assign human oversight to qualified personnel who have the necessary competence and authority to prevent risks.',
      color: 'from-green-500 to-emerald-500',
      source: sourceMapping.FCB,
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clubs must be able to justify their trust in AI and ensure decisions based on AI are objective and accessible to the player.',
      color: 'from-purple-500 to-pink-500',
      source: sourceMapping.FCB,
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Clubs must establish a risk management system to periodically review, monitor systems, and ensure products comply with regulations.',
      color: 'from-orange-500 to-red-500',
      source: sourceMapping.FCB,
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
              The critical counter-argument: addressing future challenges of legal compliance and responsible AI use in professional football.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-red-400 to-orange-500 bg-clip-text text-transparent mb-3">
                €35M
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Maximum Penalty</div>
              <div className="text-xs text-gray-500">EU AI Act non-compliance fine (FCBarcelona.com, 2025)</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-3">
                High
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Risk Classification</div>
              <div className="text-xs text-gray-500">Biometric data decisions (FCBarcelona.com, 2025)</div>
            </div>

            <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105">
              <div className="text-5xl font-bold bg-linear-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent mb-3">
                7%
              </div>
              <div className="text-sm font-semibold text-gray-300 mb-2">Turnover Fine</div>
              <div className="text-xs text-gray-500">Alternative penalty for non-compliance (FCBarcelona.com, 2025)</div>
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
              Understanding the major risks that demand rigorous attention and mitigation (FCBarcelona.com, 2025).
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
                <p className="text-gray-400 leading-relaxed">{risk.description} (FCBarcelona.com, 2025)</p>
              </div>
            ))}
          </div>

          <div className="bg-linear-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center text-red-400">The Core Risks</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-200">The Problem of Transparency</h4>
                <p className="text-gray-300 leading-relaxed">
                  The &quot;black box&quot; effect refers to the difficulty in interpreting the conclusions of complex algorithms, making AI recommendations unpredictable because it&apos;s unclear how the system arrived at a particular result (FCBarcelona.com, 2025).
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-200 mb-3">Impacts on Fairness:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>When AI conclusions affect individuals, decisions must be objective, fair, and equitable (FCBarcelona.com, 2025).</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Clubs must be able to justify their trust in the AI and the decisions made based on it (FCBarcelona.com, 2025).</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-200">Algorithmic Bias Risk</h4>
                <p className="text-gray-300 leading-relaxed">
                  The risk of &quot;inherent bias&quot; means that AI systems can become discriminatory if they inherit flaws present in human knowledge or the data they are trained on (FCBarcelona.com, 2025).
                </p>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h5 className="font-semibold text-gray-200 mb-3">Bias Mitigation:</h5>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>It is the responsibility of clubs to monitor their AI systems to ensure biases are not perpetuated (FCBarcelona.com, 2025).</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-400 mt-1">•</span>
                      <span>Clubs need to establish a risk management system to periodically review and monitor systems for bias (FCBarcelona.com, 2025).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              Source: Risks and Benefits of AI Use in Football (FCBarcelona.com, 2025)
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
              <h3 className="text-3xl font-bold mb-4">The EU Artificial Intelligence Act (AI Act)</h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The EU AI Act will come into effect on August 2, 2026, setting mandatory measures and severe penalties for non-compliance (FCBarcelona.com, 2025).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-blue-400 mb-4">High-Risk Classification</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  AI systems are classified as High Risk if they involve biometric systems or profile natural persons (FCBarcelona.com, 2025).
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">This includes AI decisions regarding a player’s continuity or transfer (FCBarcelona.com, 2025).</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                    <span className="text-sm text-gray-400">The Act also covers systems that exploit vulnerabilities based on age or economic situation (FCBarcelona.com, 2025).</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-purple-400 mb-4">Financial Penalties</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Fines for non-compliance can amount to €35 million or 7% of the company’s turnover in the previous financial year, whichever is higher (FCBarcelona.com, 2025).
                </p>
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">€35M / 7%</div>
                  <div className="text-sm text-gray-400 mb-4">Max Fine / Global Turnover (FCBarcelona.com)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Mandatory Human Oversight & Data Rights
              </span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Clubs bear significant responsibilities as end users of AI systems, requiring rigorous attention to player rights and data governance (FCBarcelona.com, 2025).
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
                  <p className="text-sm text-gray-400 leading-relaxed">{requirement.description} (FCBarcelona.com, 2025)</p>
                </div>
              );
            })}
          </div>

          <div className="bg-linear-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Key Compliance Requirements (FCBarcelona.com, 2025)</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-green-400 mb-3">Data Protection (Legal Basis)</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Consent of the individual (player must agree to using biometric data).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Performance of a contract (e.g., if data affects player bonuses).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Protection of vital interests (e.g., if a player needs urgent medical assistance).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-blue-400 mb-3">Transparency</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Clubs must maintain a record that accurately documents data usage.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Training is required for personnel responsible for operating AI systems.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-400">✓</span>
                    <span>Clubs must ensure open communication channels with providers to verify compliance.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6">
                <h4 className="font-bold text-purple-400 mb-3">Human Control</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Human oversight must aim to prevent or minimize risks to health, safety, or fundamental rights.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Clubs must be proactive in both incorporating AI and ensuring compliance with regulations.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-400">✓</span>
                    <span>Compliance is relatively straightforward if clear and effective policies are developed.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;