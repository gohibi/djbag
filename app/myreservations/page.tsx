import Image from 'next/image';

const MyReservationsPage = () =>{
    return (
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
                <h3 className="my-6 text-2xl">Mes reservations</h3>

                <div className='space-y-3'>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">   
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    className='hover:scale-110 object-cover transition w-full h-full'
                                    src="/valise.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='space-y-3 col-span-1 md:col-span-3'>
                                <h3 className="text-xl mb-4">Announcement name</h3>

                                <p className='mb-4'><strong>Check in date:</strong> 2/10/2024</p>
                                <p className='mb-4'><strong>Check out date:</strong> 23/10/2024</p>

                                <p className='mb-4'><strong>Number of kg:</strong> 4 Kg</p>
                                <p className='mb-4'><strong>Total price:</strong> 12000 xof</p>

                                <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-djbag text-white rounded-xl hover:bg-djbag-dark">Aller à l'annonce</div>
                        </div>

                    </div>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">   
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    className='hover:scale-110 object-cover transition w-full h-full'
                                    src="/valise.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='space-y-3 col-span-3'>
                                <h3 className="text-xl mb-4">Announcement name</h3>

                                <p className='mb-4'><strong>Check in date:</strong> 2/10/2024</p>
                                <p className='mb-4'><strong>Check out date:</strong> 23/10/2024</p>

                                <p className='mb-4'><strong>Number of kg:</strong> 4 Kg</p>
                                <p className='mb-4'><strong>Total price:</strong> 12000 xof</p>

                                <div className="mt-5 inline-block cursor-pointer py-4 px-6 bg-djbag text-white rounded-xl hover:bg-djbag-dark">Aller à l'annonce</div>
                        </div>
                    </div>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-400 rounded-xl">   
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                    fill
                                    className='hover:scale-110 object-cover transition w-full h-full'
                                    src="/valise.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='space-y-3 col-span-3'>
                                <h3 className="text-xl mb-4">Announcement name</h3>

                                <p className="mb-4"><strong>Check in date:</strong> 2/10/2024</p>
                                <p className="mb-4"><strong>Check out date:</strong> 23/10/2024</p>
                                <p className="mb-4"><strong>Number of kg:</strong> 4 Kg</p>
                                <p className="mb-4"><strong>Total price:</strong> 12000 xof</p>

                                <div className="mt-5 inline-block cursor-pointer py-4 px-6 bg-djbag text-white rounded-xl hover:bg-djbag-dark">Aller à l'annonce</div>
                        </div>
                    </div>
                    
                </div>
        </main>
    )
}
export default MyReservationsPage;