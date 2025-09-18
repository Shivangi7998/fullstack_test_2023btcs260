export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-blue-500">Musicify</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        <ul className="">
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Terms of Service</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Contact Us</li>
        </ul>
        <ul>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Facebook</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Twitter</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Instagram</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">LinkedIn</li> 
        </ul>
        <ul>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Help Center</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Support</li>
            <li className="inline mx-2 hover:text-yellow-400 cursor-pointer">Feedback</li>
        </ul>
        </div>
        </div>
      <p>© 2025 MediCare. All Rights Reserved.</p>
    </footer>
  );
}
