import { Link, useNavigate } from "react-router-dom";

import ProgressVar from "../components/ProgressVar";

const Projects = () => {
    let navigate = useNavigate();

    return (
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <div className="flex justify-between header-part">
                <div className="mt-5 heading">
                    <h1 className="text-4xl font-bold leading-normal">Projects</h1>
                    <div className="flex items-center text-2xl selection-status">
                        <button className="mr-6" type="button">All</button>
                        <button className="mr-6 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 text-slate-400" type="button">Refused</button>
                        <button className="text-sm text-black bg-yellow-500 rounded-full search-icon font-blod w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <button className="flex items-center p-1 bg-yellow-400 rounded-3xl"
                        onClick={() => { navigate("/project/add"); }}>
                        <i className="fa fa-plus-circle text-7xl"></i>
                        <span className="mx-10 text-xl font-bold">Submit</span>
                    </button>
                </div>
            </div>

            <div className="projects-list">
                <div className="flex justify-between p-5 mt-5 bg-yellow-100 rounded-lg ppt-card">
                    <div className="w-2/3">
                        <h4 className="text-2xl font-bold">Disbursement of funds</h4>
                        <div className="text-xl">De <Link className="underline" to="/project/article">0x1625372828zde123332</Link></div>

                        <ProgressVar
                            class="text-right"
                            width="width: 100%;"
                            progress="56"
                            statusStyle={{ marginTop: '-15px' }}
                            varStyle={{}}
                        />

                        <button className="px-6 py-1 mt-5 mb-4 text-2xl text-black bg-yellow-400 rounded-lg" type="button">See more</button>
                    </div>
                    <div className="relative text-right w-1/3">
                        <div className="ttp-right-top">
                            <h4 className="text-2xl font-bold">Creation XX/XX/XX</h4>
                            <button className="px-5 mb-4 text-xl font-bold text-black bg-yellow-400 rounded-lg" type="button">J-14</button>
                        </div>
                        <div className="absolute bottom-0 right-0 ttp-right-bottom">
                            <button className="px-6 py-1 mb-4 text-3xl font-bold text-black bg-yellow-400 rounded-lg" type="button">Valider</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;