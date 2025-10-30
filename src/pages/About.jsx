import { Package, CheckCircle } from 'lucide-react';
import FlashSale from '../components/home/FlashSale';

const About = () => {
    const coreValues = [
    {
      title: "Passionate About Work",
      description: "Passion for work is a enthusiasm and excitement for what you do."
    },
    {
      title: "Creative team members",
      description: "A creative team is to design and execute campaigns & encourage"
    },
    {
      title: "Innovation solutions",
      description: "Using either completely concepts finding new ways of using existing"
    },
    {
      title: "Qualitiful products",
      description: "Product quality refers to how well a product satisfies our customer"
    },
    {
      title: "Customer satisfaction",
      description: "Happy customers are delighted because of the customer service"
    },
    {
      title: "Simplicity interface",
      description: "Simplicity is used loosely to refer to the need to minimize a process"
    }
  ];

  const missionPoints = [
    ["Quality and Variety", "Sustainable Practices"],
    ["Expert Guidance", "Experienced Team"]
  ];

  return (
    <div className="min-h-screen bg-[#C6D870]/50 " >
      {/* Hero Section */}
      <section className="py-16 px-4 relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(https://images.alphacoders.com/131/thumb-1920-1318266.jpeg)` }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col max-w-7xl mx-auto items-center justify-center min-h-screen">
          <p className="montserrat-400 text-lg text-white mb-4">ABOUT</p>
          <h1 className="montserrat-500 tracking- sm:text-base text-4xl md:text-6xl text-center  text-white">
       
            <div className='pb-1'>We are Passionate</div>
            <div>About Our Work</div> 
            
          </h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images6.alphacoders.com/136/thumb-1920-1364888.png"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                We strive to provide our customers with the highest quality
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it's purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they're a lifestyle.
              </p>
              <div className="border-t border-gray-300 my-6"></div>
              <p className="text-gray-700 italic">
                "We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success."
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img
                  src="https://res.cloudinary.com/dbgsrmvgi/image/upload/v1760707689/photo_2025-10-17_19-27-57_ktr5jy.jpg"
                  alt="Karen Lynn"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h6 className="font-semibold text-gray-900">Nuhan Alam</h6>
                  <p className="text-sm text-gray-600">CEO & Co-founder @ TajaMango</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values that Drive Everything We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#8FA31E] rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to make the world a greener place, one plant at a time. We strive to provide our customers with the highest quality plants and plant care products, along with the knowledge and support to help them thrive.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {missionPoints.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {column.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#8FA31E] flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images3.alphacoders.com/116/thumb-1920-1167666.jpg"
                alt="Our Mission"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FlashSale */}
      <FlashSale />
    </div>
  );
};

export default About;