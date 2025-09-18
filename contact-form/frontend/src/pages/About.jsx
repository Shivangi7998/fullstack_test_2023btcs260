// const About = () => (
//   <div className="flex justify-center items-center h-screen text-3xl font-bold">
//     About Us Page
//   </div>
// );

// export default About;



export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2021/05/Rocket-Player-screenshot-2022.jpg"   // <-- put your image inside public/images folder
            alt="Musicify App Preview"
            className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About <span className="text-purple-600">Musicify</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Musicify is your ultimate music streaming platform where melodies 
            meet emotions. Discover millions of tracks, curated playlists, 
            and enjoy seamless listening anytime, anywhere. Whether you’re 
            into pop, rock, jazz, or lo-fi beats, Musicify has it all. 🎧
          </p>

          {/* Stats / Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-600">50M+</h3>
              <p className="text-gray-600">Songs & Tracks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-600">200K+</h3>
              <p className="text-gray-600">Curated Playlists</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-600">120+</h3>
              <p className="text-gray-600">Countries Available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-600">24/7</h3>
              <p className="text-gray-600">Unlimited Streaming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
