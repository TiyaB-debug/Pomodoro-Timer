import React from 'react';

const BackgroundPicker = ({ setBackground }) => {
  const backgroundOptions = [
    { name: "Seoul Sunset", url: "https://images.squarespace-cdn.com/content/v1/5ea1f794501b7153b29e7cd7/1616166805218-GWV2WRIIQQOIQZ9C8NAO/unsplash-image-LoGWCnEVDgU.jpg" },
    { name: "Dark Academia", url: "https://images.unsplash.com/photo-1502485019198-a625bd53ceb7?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cozy Studio", url: "https://image.lexica.art/full_webp/b82f813a-28ce-40c7-86a7-8a0fb31494d7" },
    { name: "Cherry Blossom", url: "https://i.redd.it/uxc4y1auik171.jpg" },
    { name: "Under the Moon", url: "https://img.freepik.com/free-photo/digital-art-style-sky-landscape-with-moon_23-2151120829.jpg" },
    { name: "Mountain Retreat", url: "https://images4.alphacoders.com/103/103374.jpg" },
    { name: "Rainy City", url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3160070-4fb9-40e8-821d-5c0592fd114e/dg33ubb-3fd3c2ff-b4fb-4263-8b01-2247ac384789.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzMTYwMDcwLTRmYjktNDBlOC04MjFkLTVjMDU5MmZkMTE0ZVwvZGczM3ViYi0zZmQzYzJmZi1iNGZiLTQyNjMtOGIwMS0yMjQ3YWMzODQ3ODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o7wmXMkB8x__e_oJFkwyGW2NiQLIaU8yi_2Um4O5Oho" },
    { name: "Sunset Lake", url: "https://images.unsplash.com/photo-1500167176026-330fee16a975?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ];

  return (
    <div className="background-picker">
      <select onChange={(e) => setBackground(e.target.value)} className="background-select">
        {backgroundOptions.map((bg, index) => (
          <option key={index} value={bg.url}>
            {bg.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BackgroundPicker;
