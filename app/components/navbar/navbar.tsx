import Link from "next/link";
import Image from "next/image";
import SearchFilters from "./Searchfilters";
import UserNav from "./UserNav";
import AddAnnounce from './AddAnnounce';

const Navbar = () =>{
    return(
        <nav className="w-full fixed top-0 left-0 py-4 bg-white border-b-2 z-10 ">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src="/images.png" alt="my logotype" width={150} height={38}/>
                    </Link>
                    <div className="flex space-x-6">
                        <SearchFilters  />
                    </div>
                    <div className="flex items-center space-x-6">
                        <AddAnnounce  />
                        <UserNav  />
                    </div>
                </div>
            </div>    
        </nav>
    )
}

export default Navbar;