"use client";

export default function CriticalPage() {
  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-32">
      <div className="absolute inset-0 bg-linear-to-b from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Critical Preface & Conclusion
          </span>
        </h1>

        {/* Critical Preface */}
        <section className="mb-24">
          <div className="mb-6 inline-block px-5 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Critical Preface
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed">
              Soccer, or football, is the most popular sport in the world, and it&apos;s currently undergoing a
              tremendous transition due to the impact of Artificial Intelligence. This is much more than just
              numbers and changes in statistics because AI is transforming the means of handling players&apos; teams,
              preventing injuries, and making strategic decisions in a globally competitive sport with enormous
              investment stakes involved. When the stakes involve enormous sums of money with minute margins of
              improvement available, the need for new technology is no longer an option, making Artificial Intelligence
              a reality rather than a concept in the sport of soccer today because, whether you are a part of
              a future involving professional sports, a simple fan, or a club operator, you simply can&apos;t miss this transition.
            </p>

            <p className="text-gray-300 leading-relaxed mt-5">
              The central question guiding this research is: How is the integration of Artificial Intelligence
              fundamentally transforming elite soccer across the critical domains of player performance, injury
              prevention, and strategic decision-making, and what are the associated ethical considerations? There
              is an increasingly large body of evidence coming from both scholarly sources and industry case reports
              showing that AI&apos;s impact is revolutionary and multifaceted.
            </p>

            <p className="text-gray-300 leading-relaxed mt-5">
              The argument is this: AI is transforming elite football in profound and irrevocable ways by
              delivering improved player performance, enhancing player injury prevention, and reshaping other
              strategy aspects outside of the field, but ethics need to be addressed in order for it to be successfully utilized.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <div className="mb-6 inline-block px-5 py-2 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Conclusion
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed">
              The evidence presented throughout this research demonstrates that AI is reshaping elite football.
              Sports AI is already improving players&apos; performance, reducing the risk of injuries, and
              transforming the selection and tactics process for clubs. It is evident that AI is no longer
              a complementary solution for football clubs but is integral for elite football players.
            </p>

            <p className="text-gray-300 leading-relaxed mt-5">
              However, with such rapid progress, there are also major questions about ethics here.
              Data privacy, bias, and issues of governance, among other factors related to such rapid growth,
              aren&apos;t issues to just brush aside. If such systems aren&apos;t governed properly, they could actually
              do harm to players&apos; welfare as well as the sport.
            </p>

            <p className="text-gray-300 leading-relaxed mt-5">
              Ultimately, what the sport of elite football looks like is up to us and dependent not only on how
              effectively we implement AI but also on the responsibility with which we manage it. If we team
              AI with good ethics, it could elevate the sport to incredible levels of performance. That&apos;s the
              best-case scenario. Without such safeguards, its long term impact remains uncertain.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
