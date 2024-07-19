import ReservationSidebar from '@/app/components/annonces/ReservationSidebar';
import Image from 'next/image'
const AnnouncePageDetail = () => {
    return (
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 relative overflow-hidden rounded-xl">
                    <Image 
                        fill
                        src="/valise.webp"
                        className="object-cover w-full h-full"
                        alt='valise'
                    
                    />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
                    <div className="py-6 pr-6 col-span-3">
                         <h3 className='mb-4 text-4xl'> Annonce nom</h3>
                         <span className="mb-6 block text-lg text-gray-600">
                            Details et Descriptions annonce
                         </span>
                         
                         <hr />
                         <div className='py-6 flex items-center space-x-4'>
                            <Image 
    
                                src="/baseavatar.jpg"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="user picture"
                
                            />
                            <p>Published by<strong> John Doe</strong></p>
                         </div>
                         <hr />

                         <div className='mt-6 text-lg'>
                            <p> loEa cillum nisi incididunt velit dolore in duis aute. 
                            ariatur est sit incididunt sint ullamco elit pariatur ex sunt consequat.</p>
                         </div>
                    </div>

                   <ReservationSidebar />
                   
            </div>
        </main>
        
    )
}

export default AnnouncePageDetail;