export default function Home() {
  return (
    <div className="p-6 h-full w-full bg-gradient-to-b from-blue-200 to-blue-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to Musicify 🎧</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="items-center">
          <div className="bg-gray-200 p-4 rounded ">Song 1
          <img className="h-[50%] w-[50%] rounded-lg ml-16" src="https://tse4.mm.bing.net/th/id/OIP.WFDEkRR1dVJwgAKexQBS_wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          </div>
          <div className="bg-gray-200 p-4 rounded">Song 1
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://tse3.mm.bing.net/th/id/OIP.gHapTKmvPu1-FHdf-dgrxgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          <div className="bg-gray-200 p-4 rounded ">Song 1
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://cdn.dribbble.com/users/8098835/screenshots/15792195/roop_music_player.png" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          <div className="bg-gray-200 p-4 rounded ">Song 1
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://adobexdelements.com/wp-content/uploads/2019/10/app-music-ui-kit.jpg" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          
        </div>
      </section>

      <section className="mt-">
        <h2 className="text-2xl font-semibold mb-3">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded ">Album 1
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://adobexdelements.com/wp-content/uploads/2019/10/app-music-ui-kit.jpg" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          <div className="bg-gray-200 p-4 rounded ">Album 2
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://adobexdelements.com/wp-content/uploads/2019/10/app-music-ui-kit.jpg" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          <div className="bg-gray-200 p-4 rounded ">Album 3
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://adobexdelements.com/wp-content/uploads/2019/10/app-music-ui-kit.jpg" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
          <div className="bg-gray-200 p-4 rounded ">Album 4
          <img className="h-[60%] w-[60%] rounded-lg ml-16" src="https://adobexdelements.com/wp-content/uploads/2019/10/app-music-ui-kit.jpg" alt="" />
          <h3 className="text-center">Title</h3>
          <p className="text-center">Songs Details</p>
          </div>
        </div>
      </section>
    </div>
  );
}
