import SearchBox from "../../components/SearchBox";

const Votes = () => {
    return(
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <SearchBox />


            <div className="flex mt-5">
                <img src="/imgs/avatar.png" className="rounded-full" width={148} style={{border:'8px solid #FFC917', height:'148px'}} alt="" />
                <div className="mt-9 ml-4">
                    <div className="text-xl">0x1625372828zde123332</div>
                    <button className="text-black bg-yellow-400 px-7 py-1 rounded-lg mt-3" type="button">Edit Profile</button>
                </div>
            </div>

            <div className="profile-tabs mt-5">
                <button className="text-black bg-yellow-400 px-7 py-1 rounded-xl text-2xl  mr-8" type="button">Votes</button>
                <button className="text-2xl mr-8" type="button">Propositions</button>
                <button className="text-2xl mr-8" type="button">Projects Submit</button> 
            </div>
            <div className="px-3 mt-3">
                <div className="selection-status flex items-center text-2xl">
                    <button className="mr-6" type="button">All</button>
                    <button className="mr-6 text-slate-400" type="button">Approved</button>
                    <button className="mr-6 text-slate-400" type="button">Refused</button> 
                    <button className="search-icon rounded-full bg-yellow-500 text-black font-blod text-sm w-7 h-7" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div className="lists">
                    <div className="forum-card-2 bg-yellow-100 p-5 mt-4 rounded-xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-bold text-xl">Disbursement of funds</h3>
                                <div className="font-bold">0x1625372828zde123332</div>
                            </div>
                            <div>
                                <div className="justify-items-end font-bold">10/10/2022</div>
                                <button className="text-black bg-yellow-400 h-9 px-5 py-1 rounded-xl" type="button">Refuse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Votes;