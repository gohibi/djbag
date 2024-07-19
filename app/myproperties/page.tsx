import ListAnnounce from "../components/annonces/ListAnnounce";

const MyPropertiesPage = () => {
    return (
        <main className="max-w-[1700px] mx-auto px-6 pb-6">
                <h3 className="my-6 text-2xl">Mes Annonces</h3>
    
                <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <ListAnnounce />
                </div>
        </main>
    )
}

export default MyPropertiesPage;