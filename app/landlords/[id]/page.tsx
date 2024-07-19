import ListAnnounce from '@/app/components/annonces/ListAnnounce';
import ContactButton from '@/app/components/categories/ContactButton';
import Image from 'next/image';

const LandLordPageDetail = () => {
    return (
       
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                        <div className="flex flex-col items-center p-6 rounded-xl border border-gray-400 shadow-xl">
                            <Image
                                src="/baseavatar.jpg"
                                className="rounded-full"
                                alt=""
                                width={200}
                                height={200}

                
                            
                            />
                            <h3 className='mt-6 text-2xl'>landlrod name</h3>
                                <ContactButton />
                        </div>
                </aside>
                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <ListAnnounce />
                    </div>
                </div>
            </div>
           
        </main>
        
    )
}

export default LandLordPageDetail;