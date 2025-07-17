import Image from "next/image";

const SponsorsSection = () => {
  const sponsors = [
    { name: "UAGRO", logo: "/uagro.png" },
    { name: "ATEX IT", logo: "/atex it.png" }
  ];

  return (
    <div className="py-16 bg-[#EDE0D4]" id="sponsors">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1D3557] mb-12">Nuestros Patrocinadores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                width={150}
                height={80}
                className="max-w-full h-auto object-contain"
              />            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;