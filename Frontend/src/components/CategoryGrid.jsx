import React from 'react'

function CategoryGrid({ images, categoryName }) {

    const Filterdata = images.filter(
        (item) => (item.category?.toLowerCase() || "") === categoryName.toLowerCase()
    );

    const filterdata = Filterdata.slice(0,8);

    return (
        <div className="w-full overflow-hidden flex grid grid-cols-2 md:grid-cols-4 gap-2 bg-white items-center justify-center pt-6">
            {filterdata.length > 0 ? (
                filterdata.map((image) => (
                    <div key={image.id} className="card card-sm bg-white w-40 md:w-full h-full text-black shadow-xl overflow-x-hidden">
                        <figure>
                            <img src={image.src} alt={image.description} className="w-[80%] h-[80%]" />
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
