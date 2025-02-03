export function Categories({ cat, onPress }) {
    return (
        <div className="w-screen flex flex-col items-center py-12 bg-gray-50">
            
            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl w-full px-6">
                {cat.map((x, i) => (
                    <div 
                        key={i} 
                        onClick={() => x.onPressed()} 
                        className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    >
                        {/* Product Image */}
                        <img className="w-full h-72 object-cover" src={x.link} alt={x.name} />

                        {/* Product Details */}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">{x.name}</h3>
                            <p className="text-sm text-gray-600">⭐⭐⭐⭐☆ 4.5/5</p>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-gray-900">₹1200</span>
                                <button className="text-blue-600 font-medium">Shop Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button className="mt-10 px-8 py-3 border rounded-full text-gray-900 font-medium hover:bg-gray-100 transition">
                View All
            </button>
        </div>
    );
}
