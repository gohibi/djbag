const ReservationSidebar = () =>{
    return(
        <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h3 className="mb-5 text-2xl">10000 XOF par kg</h3>
            <div className="mb-6 p-3 rounded-xl border border-gray-600">
                <label htmlFor="" className="block font-bold text-xs">Poids</label>
                <select name="" id="" className="w-full -ml-1 text-xm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className="w-full mb-6 py-4 text-center bg-djbag text-white rounded-xl hover:bg-djbag-dark cursor-pointer">Commander</div>
            <div className="mb-4 flex justify-between align-center">
                <p>1000 * 10 kg</p>
                <p>10000 Xof</p>
                
            </div>
            <div className="mb-4 flex justify-between align-center">
                <p>Commission</p>
                <p>200 Xof</p>
                
            </div>
            <hr />
            <div className="mb-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>10200 Xof</p>
                
            </div>
        </aside>
    )
}

export default ReservationSidebar;