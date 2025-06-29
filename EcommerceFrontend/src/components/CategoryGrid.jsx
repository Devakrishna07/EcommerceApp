import React from 'react'

function CategoryGrid() {
    const Grid = [
        { id: '1', src: 'https://picsum.photos/200/300', price: '2000' },
        { id: '2', src: 'https://picsum.photos/200/300', price: '4000' },
        { id: '1', src: 'https://picsum.photos/200/300', price: '2000' },
        { id: '2', src: 'https://picsum.photos/200/300', price: '4000' },
    ]
    return (
        <div className="w-screen p-2 flex flex-col justify-evenly items-center text-black">
            <div className="w-full flex justify-center flex-row overflow-hidden py-3">
                <div className="border-t-4 border-blue-400 rounded-full w-full my-4"></div>
                <h1 className="text-3xl font-bold">Jeans</h1>
                <div className="border-t-4 border-blue-400 rounded-full w-full my-4"></div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Grid.map(Gridel => (
                    <li key={Gridel.id}>
                        <div className="card hidden md:block bg-blue-500 w-full shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card flex md:hidden bg-white border border-black-200 w-full shadow-xl">
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Card Title</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                    </li>))}
            </ul>
        </div>
    )
}

export default CategoryGrid
