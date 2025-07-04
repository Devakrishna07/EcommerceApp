import React from 'react'

function CategoryGrid({ categoryName = "1" }) {
    const images = [
        { id: 1, src: "https://picsum.photos/300/300?random=1", description: "Beautiful landscape", category: "1" },
        { id: 2, src: "https://picsum.photos/300/300?random=2", description: "Serene lake", category: "1" },
        { id: 3, src: "https://picsum.photos/300/300?random=3", description: "City skyline", category: "1" },
        { id: 4, src: "https://picsum.photos/300/300?random=4", description: "Forest path", category: "1" },
        { id: 5, src: "https://picsum.photos/300/300?random=5", description: "Colorful flowers", category: "1" },
        { id: 6, src: "https://picsum.photos/300/300?random=6", description: "Beach view", category: "1" },
        { id: 7, src: "https://picsum.photos/300/300?random=7", description: "Snow mountain", category: "1" },
        { id: 8, src: "https://picsum.photos/300/300?random=8", description: "Historic building", category: "1" },
        { id: 9, src: "https://picsum.photos/300/300?random=9", description: "Green field", category: "1" },
        { id: 10, src: "https://picsum.photos/300/300?random=10", description: "Wooden bridge", category: "1" }
    ];

    const filterdata = images.filter(
        (item) => (item.category?.toLowerCase() || "") === categoryName.toLowerCase()
    );

    return (
        <div className="w-full overflow-hidden flex grid grid-cols-2 md:grid-cols-4 gap-2 bg-white items-center justify-center pt-6">
            {filterdata.length > 0 ? (
                filterdata.map((image) => (
                    <div key={image.id} className="card card-sm bg-white w-40 md:w-full h-full text-black shadow-xl overflow-x-hidden">
                        <figure>
                            <img src={image.src} alt={image.description} className="w-full h-full" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{image.description}</h2>
                            <p>This card is filtered by category "{categoryName}".</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center w-full text-gray-500">No items found for category "{categoryName}".</p>
            )}
        </div>
    );
}

export default CategoryGrid;
