const FeaturesSection = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Work with a diverse group of individuals to solve global challenges."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Develop creative solutions using NASA's open data and cutting-edge technologies."
    },
    {
      icon: "fas fa-trophy",
      title: "Awards",
      description: "Compete for prizes and recognition from NASA and global space agencies."
    },
    {
      icon: "fas fa-rocket",
      title: "Space Exploration",
      description: "Contribute to real space missions and Earth science projects."
    },
    {
      icon: "fas fa-network-wired",
      title: "Networking",
      description: "Connect with industry professionals, scientists, and fellow space enthusiasts."
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Learning",
      description: "Gain new skills and knowledge through workshops and mentorship opportunities."
    }
  ];

  return (
    <div className="py-16 bg-[#FFFCF6]" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3B2B22] mb-12">Event Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-[#B7D8CC] mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-[#3B2B22] mb-2">{feature.title}</h3>
              <p className="text-[#3B2B22]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;