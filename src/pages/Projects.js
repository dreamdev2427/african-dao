import { Link, useNavigate } from "react-router-dom";

import ProgressVar from "../components/ProgressVar";

const Projects = () => {
    let navigate = useNavigate();

    return (
        <div className="container px-4 mx-auto main-grid grid">
            <div className="header-part flex justify-between">
                <div className="heading mt-5">
                    <h1 className="font-bold text-4xl leading-normal">Projects</h1>
                    <div className="selection-status flex items-center text-2xl">
                        <button className="mr-6" type="button">All</button>
                        <button className="mr-6 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 text-slate-400" type="button">Refused</button> 
                        <button className="search-icon rounded-full bg-yellow-500 text-black font-blod text-sm w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="rounded-3xl bg-yellow-400 flex items-center p-1" 
                        onClick={() => { navigate("/project/add"); }}>
                        <i className="fa fa-plus-circle text-7xl"></i>
                        <span className="mx-10 text-xl font-bold">Submit</span>
                    </button>
                </div>
            </div>

            <div className="projects-list">
                <div className="ppt-card flex justify-between bg-yellow-100 rounded-lg mt-5 p-5">
                    <div className="">
                        <h4 className="font-bold text-2xl">Disbursement of funds</h4>
                        <div className="text-xl">De <Link className="underline" to="/project/article">0x1625372828zde123332</Link></div>

                        <ProgressVar
                            class="text-right"
                            width="590px"
                            progress="56"
                            statusStyle={{marginTop:'-15px'}}
                            varStyle={{}}
                            />

                        <button className="text-black bg-yellow-400 rounded-lg text-2xl px-6 py-1 mb-4 mt-5" type="button">See more</button>
                    </div>
                    <div className="text-right relative">
                        <div className="ttp-right-top">
                            <h4 className="font-bold text-2xl">Creation XX/XX/XX</h4>
                            <button className="font-bold text-black bg-yellow-400 rounded-lg text-xl px-5 mb-4" type="button">J-14</button>
                        </div>
                        <div className="ttp-right-bottom absolute bottom-0 right-0">
                            <button className="font-bold text-black bg-yellow-400 rounded-lg text-3xl px-6 py-1 mb-4" type="button">Valider</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;