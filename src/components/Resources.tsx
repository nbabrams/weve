import { ExternalLink } from 'lucide-react';

interface ResourcesProps {
  onBack?: () => void;
}

export function Resources({ onBack }: ResourcesProps) {
  const resources = [
    {
      category: 'Understanding Loneliness',
      items: [
        {
          title: 'The Science of Loneliness',
          description: 'Research shows that loneliness affects our physical and mental health.',
          link: 'https://greatergood.berkeley.edu/article/item/why_is_loneliness_so_bad_for_your_health'
        },
        {
          title: 'Social Connection and Health',
          description: 'How meaningful relationships impact our well-being.',
          link: 'https://www.cdc.gov/social-connectedness/about/?CDC_AAref_Val=https://www.cdc.gov/emotional-wellbeing/social-connectedness/affect-health.htm'
        }
      ]
    },
    {
      category: 'Building Connection',
      items: [
        {
          title: 'The Art of Vulnerability',
          description: 'Learn how opening up creates deeper bonds.',
          link: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability'
        },
        {
          title: 'Active Listening Skills',
          description: 'Techniques for truly hearing what others share.',
          link: 'https://www.verywellmind.com/what-is-active-listening-3024343'
        },
        {
          title: 'Asking Better Questions',
          description: 'How to move beyond small talk into meaningful conversation.',
          link: 'https://hbr.org/2018/05/the-surprising-power-of-questions'
        }
      ]
    },
    {
      category: 'Maintaining Friendships',
      items: [
        {
          title: 'Navigating Conflict',
          description: 'Healthy ways to address disagreements in friendships.',
          link: 'https://www.gottman.com/blog/5-steps-to-fight-better-if-your-relationship-is-worth-fighting-for/'
        },
        {
          title: 'Showing Up for Friends',
          description: 'What it means to be present during difficult times.',
          link: 'https://www.psychologytoday.com/us/blog/reflect-and-reset/202309/the-vital-importance-of-showing-up-for-others-and-ourselves'
        },
        {
          title: 'Setting Boundaries',
          description: 'Protecting your energy while staying connected.',
          link: 'https://psychcentral.com/lib/what-are-personal-boundaries-how-do-i-get-some'
        }
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[hsl(20,30%,98%)]">
      <header className="sticky top-0 z-10 bg-white h-[45px] flex items-center justify-center border-b border-[#f6f7f9]">
        <h1 className="font-['Inter'] font-semibold text-[19px] text-[#e99b63] tracking-[0.18px]">Resources</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
          <div className="bg-gradient-to-br from-[hsl(25,75%,65%)] to-[hsl(11,79%,62%)] rounded-xl p-6 text-white shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] bg-[rgb(190,89,42)]">
            <h3 className="mb-2">Building Bonds</h3>
            <p className="text-white/90">
              Learn more about building and maintaining meaningful friendships through these curated resources.
            </p>
          </div>

          {resources.map((section) => (
            <section key={section.category} className="space-y-4">
              <h3 className="text-[hsl(200,40%,25%)]">{section.category}</h3>
              
              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-[hsl(210,20%,97%)] rounded-xl p-4 shadow-[0_2px_8px_hsla(200,40%,25%,0.08)] hover:shadow-[0_4px_12px_hsla(25,75%,65%,0.3)] transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-[hsl(200,40%,25%)] mb-1">{item.title}</h4>
                        <p className="text-[hsl(215,10%,45%)]">{item.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-[hsl(25,75%,65%)] flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <div className="bg-[hsl(172,42%,40%)]/10 border border-[hsl(172,42%,40%)]/20 rounded-xl p-6">
            <h4 className="text-[hsl(200,40%,25%)] mb-2">Need Support?</h4>
            <p className="text-[hsl(215,10%,45%)] mb-4">
              If you're struggling with loneliness or mental health, please reach out to a professional or support service.
            </p>
            <p className="text-[hsl(215,10%,45%)]">
              National Crisis Hotline: 988
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
