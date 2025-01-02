import { FaHeadset, FaMoneyBillWave, FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbRosetteDiscount } from "react-icons/tb";

const Information = () => {
  const infos = [
    {
      icon: <FaShippingFast className="text-3xl text-red-700" />,
      title: "Free Shipping",
      description: "Get your orders delivered without extra cost.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-700" />,
      title: "Support 24/7",
      description: "We are here to assist you anytime.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-700" />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied.",
    },
    {
      icon: <RiSecurePaymentFill className="text-3xl text-red-700" />,
      title: "Payment Secure",
      description: (
        <>
          Your payment information is{" "}
          <span className="text-green-800 font-bold">
            <q>
              <i>SAFE</i>
            </q>
          </span>{" "}
          with us.
        </>
      ),
    },
    {
      icon: <TbRosetteDiscount className="text-3xl text-red-700" />,
      title: "Discount",
      description: "Enjoy the best price on our products.",
    },
  ];
  return (
    <>
      <div className="bg-white pb-8 pt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {infos.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border shadow-lg
              hover:scale-105 transform transition-transform duration-300 cursor-pointer"
            >
              {item.icon}
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Information;
