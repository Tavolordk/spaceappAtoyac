const SponsorsSection = () => {
  const sponsors = [
    { name: "NASA", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=NASA" },
    { name: "SpaceX", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=SpaceX" },
    { name: "Boeing", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=Boeing" },
    { name: "Lockheed Martin", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=Lockheed+Martin" },
    { name: "Blue Origin", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=Blue+Origin" },
    { name: "Northrop Grumman", logo: "https://placehold.co/150x80/E2F1ED/3B2B22?text=Northrop+Grumman" },
  ];

  return (
    <div className="py-16 bg-[#E2F1ED]" id="sponsors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3B2B22] mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SponsorsSection;
