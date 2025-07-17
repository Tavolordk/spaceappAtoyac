
const AboutRegisterSection = () => {
  return (
    <div className="bg-[#E2F1ED] py-16 mt-16" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#3B2B22] mb-4">About the Challenge</h2>
            <p className="text-[#3B2B22] mb-4">
              NASA Space Apps Challenge is an international hackathon for coders, scientists, designers, storytellers,
              makers, builders, technologists, and others where teams engage with NASA's open data to address real-world
              problems on Earth and in space.
            </p>
            <p className="text-[#3B2B22]">
              Join us for a weekend of innovation, collaboration, and problem-solving as we tackle some of the most
              pressing challenges in space exploration and Earth science.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 w-full" id="register">
            <h2 className="text-3xl font-bold text-[#3B2B22] mb-4">Register Now</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 rounded-md" />
              <input type="email" placeholder="Email Address" className="w-full p-2 rounded-md" />
              <select className="w-full p-2 rounded-md">
                <option value="">Select your role</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="data_scientist">Data Scientist</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#B7D8CC] text-[#3B2B22] font-semibold py-2 px-4 rounded-md hover:bg-[#A3CFC0] transition duration-300"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRegisterSection;
