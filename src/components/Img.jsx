const Img = () => {
  const items = [
    {
      title: "Shop Floor",
      img: "https://odoospecialist.com/web/image/821-d3abd671/shop%20flor.webp",
    },
    {
      title: "Expenses",
      img: "https://odootechbi.com/wp-content/uploads/2024/05/Background-3.png.webp",
    },
    {
      title: "Point of Sale",
      img: "https://odootechbi.com/wp-content/uploads/2024/05/Background-1.png.webp",
    },
    {
      title: "IoT",
      img: "https://oranjewood.com/web/image/4339-bca64fdd/device_IoT_hardware.webp",
    },
    {
      title: "Frontdesk",
      img: "https://odootechbi.com/wp-content/uploads/2024/05/Background-4.png.webp",
    },
    {
      title: "Inventory",
      img: "https://ex96u4es9g6.exactdn.com/wp-content/uploads/2024/04/odoo-supplier-management1.png?strip=all&lossy=1&quality=80&webp=80&sharp=1&ssl=1&sharp=1&fit=346,380",
    },
    {
      title: "Kiosk",
      img: "https://odootechbi.com/wp-content/uploads/2024/05/Background-3.png.webp",
    },
  ];

  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

 return (
  <section className="py-16 px-4 text-center bg-white">
    {/* Title */}
    <h2 className="md:text-4xl font-semibold mb-32">
      <span className="text-main-color font-caveat text-7xl">All the tech</span>
      <span className="text-7xl text-black font-semibold font-caveat"> in one platform</span>
    </h2>

    {/* First Row (4 items) */}
    <div className="flex justify-center flex-wrap gap-16 mb-32">
      {firstRow.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-60 relative">
          {/* Circle Background */}
          <div className="w-52 h-52 md:w-56 md:h-56 rounded-full bg-gray-100 shadow mb-6"></div>
          {/* Image Popping Outside */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute top-[-30px] object-contain w-60 h-60"
          />
          <p className="text-xl font-semibold text-gray-800 mt-4">{item.title}</p>
        </div>
      ))}
    </div>

    {/* Second Row (3 items) */}
    <div className="flex justify-center flex-wrap gap-16">
      {secondRow.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-60 relative">
          {/* Circle Background */}
          <div className="w-52 h-52 md:w-56 md:h-56 rounded-full bg-gray-100 shadow mb-6"></div>
          {/* Image Popping Outside */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute top-[-30px] object-contain w-60 h-60"
          />
          <p className="text-lg font-semibold text-gray-800 mt-4">{item.title}</p>
        </div>
      ))}
    </div>
  </section>
);

};

export default Img;
