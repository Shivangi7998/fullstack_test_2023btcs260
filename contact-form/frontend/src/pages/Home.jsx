export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Musicify 🎧</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded">Song 1</div>
          <div className="bg-gray-200 p-4 rounded">Song 2</div>
          <div className="bg-gray-200 p-4 rounded">Song 3</div>
          <div className="bg-gray-200 p-4 rounded">Song 4</div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">New Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 p-4 rounded">Album 1</div>
          <div className="bg-gray-200 p-4 rounded">Album 2</div>
          <div className="bg-gray-200 p-4 rounded">Album 3</div>
          <div className="bg-gray-200 p-4 rounded">Album 4</div>
        </div>
      </section>
    </div>
  );
}
