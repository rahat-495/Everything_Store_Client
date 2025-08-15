
const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "দেশের যেকোনো প্রান্তে superfast & নিরাপদ ডেলিভারি।",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    desc: "100% নিরাপদ ও trusted payment gateway নিশ্চিত।",
  },
  {
    icon: "🔄",
    title: "Easy Return Policy",
    desc: "পণ্য পছন্দ না হলে সহজেই return করতে পারেন।",
  },
  {
    icon: "💬",
    title: "24/7 Customer Support",
    desc: "যেকোনো সমস্যায় আমরা আছি সবসময় আপনার পাশে।",
  },
];

const WhyChoseUs = () => {
    return (
        <div className="min-h-[30%] w-full flex flex-col items-center gap-10 pt-12 mb-10">
            
            <h1 className="gro font-semibold text-2xl">Why Choose Us</h1>

            <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-lg hover:border-green-500/50 duration-300 shadow-md border border-black/10 p-6 flex flex-col items-center text-center"
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WhyChoseUs;
