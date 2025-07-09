const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "96adfbd6-3c86-4bb9-a09c-15cfcb82c154");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your Information Submitted!!");
    }
  };

  return (
    <div className="p-2 shadow-lg rounded-lg mx-auto max-w-3xl mt-10 bg-white border border-gray-200">
      <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
        <span className="text-blue-600">Get In Touch</span>
      </h1>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="emailSub"
              placeholder="Email Subject"
              required
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="relative">
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
