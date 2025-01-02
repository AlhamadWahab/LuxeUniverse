function AboutUs() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About{" "}
                <span className="hover:text-orange-400">
                  Lu
                  <span className="text-3xl text-red-700 hover:text-black">
                    xeUni
                  </span>
                  verse
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to LuxeLoom, your ultimate destination for luxurious
                fashion and timeless elegance. We specialize in offering
                high-quality clothing, accessories, and home decor that combine
                comfort and style. Our curated collections are designed to cater
                to the sophisticated tastes of those who appreciate the finer
                things in life.
              </p>
              <p className="mt-4 text-gray-600 text-lg">
                At LuxeLoom, we believe that true luxury lies in the details.
                Each product is carefully chosen to ensure premium quality, and
                our commitment to exceptional customer service sets us apart in
                the world of fashion. Whether you´re shopping for a special
                occasion or treating yourself to something extraordinary,
                LuxeLoom has something just for you.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://cdn.dribbble.com/userupload/9736807/file/original-033a751f636513abbf2a8b39e898c22e.png?resize=1200x900"
                alt="About LuxeLoom"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
