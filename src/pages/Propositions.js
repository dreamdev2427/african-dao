import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProgressVar from '../components/ProgressVar';

function Propositions() {
    useEffect(() => {
        
    }, []);

    const [ showSubmitProposition, setShowSubmitProposition ] = useState(false);

    const onClickToggleSubmitDiv = (flag) => {
        flag===1 ? setShowSubmitProposition(true) : setShowSubmitProposition(false);
    }


    return (
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <div className="header-part flex justify-between">
                <div className="heading mt-5 w-full">
                    <h1 className="font-bold text-4xl leading-normal">Propostions</h1>
                    {
                        showSubmitProposition && 
                        <div className="submit-form p-10 rounded-3xl bg-yellow-400 relative">
                            <button className="submit-close-btn absolute top-5 right-5"
                                    onClick={() => onClickToggleSubmitDiv(0) }
                                    ><i className="fa fa-window-close text-xl"></i></button>
                            <h3 className="font-bold text-3xl mb-2">Submit</h3>
                            <div className="checkbox-item">
                                <input type="checkbox" id="disbursement_of_funds"  />
                                <label htmlFor="disbursement_of_funds" className="ml-3">Disbursement of funds</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="liquidation"  />
                                <label htmlFor="liquidation" className="ml-3">Liquidation of our participation in a project</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="distribution"  />
                                <label htmlFor="distribution" className="ml-3">Distribution of dividends</label>
                            </div>
                            <textarea className="indent-2 w-full h-56"></textarea>
                            <button className="text-white bg-black rounded-lg text-2xl px-6 py-1 mb-4 mt-5" type="button">submit</button>
                        </div>
                    }
                    <div className="selection-status flex items-center text-2xl">
                        <button className="mr-6" type="button">All</button>
                        <button className="mr-6 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 text-slate-400" type="button">Refused</button> 
                        <button className="search-icon rounded-full bg-yellow-500 text-black font-blod text-sm w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                { 
                    !showSubmitProposition && 
                    <div className="mt-10">
                        <button className="rounded-3xl bg-yellow-400 flex items-center p-1" 
                            onClick={() => onClickToggleSubmitDiv(1)}>
                            <i className="fa fa-plus-circle text-7xl"></i>
                            <span className="mx-10 text-xl font-bold">Submit</span>
                        </button>
                    </div>
                }
            </div>

            <div className="proposition-list">

                <div className="ppt-card flex justify-between bg-yellow-100 rounded-lg mt-5 p-5">
                    <div className="w-2/3">
                        <h4 className="font-bold text-2xl">Disbursement of funds</h4>
                        <div className="text-xl">De <Link className="underline" to="/proposition/article">0x1625372828zde123332</Link></div>

                        <ProgressVar
                            class="text-right"
                            width="100%"
                            progress="56"
                            statusStyle={{marginTop:'-15px'}}
                            varStyle={{}}
                            />

                        <button className="text-black bg-yellow-400 rounded-lg text-2xl px-6 py-1 mb-4 mt-5" type="button">See more</button>
                    </div>
                    <div className="text-right relative w-1/3">
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
    )
}

export default Propositions;