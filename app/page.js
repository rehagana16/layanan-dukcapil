import React from 'react';

// Main App Component
export default function Home() {
  // Data for the links. This can be easily updated or fetched from an API.
  const links = [
    {
      id: 1,
      title: 'Syarat & Prosedur',
      url: 'https://dukcapil.kemendagri.go.id/page/read/syarat-prosedur', // Replace with your actual URL
    },
    {
      id: 2,
      title: 'Pengaduan',
      url: 'https://dukcapil.kemendagri.go.id/page/read/layanan-pengaduan', // Replace with your actual URL
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        
        {/* Profile Section */}
        <header className="flex flex-col items-center text-center mb-8">
          <img
            src="https://placehold.co/96x96/3182ce/ffffff?text=LD"
            alt="Logo Dukcapil"
            className="w-24 h-24 rounded-full mb-4 shadow-lg border-4 border-white"
          />
          <h1 className="text-2xl font-bold text-gray-900">
            Layanan Dukcapil
          </h1>
          <p className="text-md text-gray-600 mt-1">
            Portal Layanan Resmi Kependudukan dan Pencatatan Sipil
          </p>
        </header>

        {/* Links Section */}
        <main className="w-full">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block w-full bg-white p-4 rounded-lg text-center font-semibold text-lg 
                    text-blue-600 border border-gray-200 shadow-sm 
                    hover:bg-blue-50 hover:shadow-md hover:scale-105 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    transition-all duration-300 ease-in-out
                  "
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </main>

        {/* Footer */}
        <footer className="text-center mt-12">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Dinas Kependudukan dan Pencatatan Sipil.
          </p>
        </footer>
        
      </div>
    </div>
  );
}
