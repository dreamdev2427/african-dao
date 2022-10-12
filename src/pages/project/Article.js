import { useState } from 'react';

import ProgressVar from '../../components/ProgressVar';

const Article = () => {
    const [ moreArt, setMoreArt ] = useState(false);

    return (
        <div className="w-11/12 sm:w-5/6 pb-10 grid mx-auto main-grid">
            <div className='art-container px-3 sm:px-10 md:px-16 lg:px-24'>
                <div className='sm:flex justify-between mt-5'>
                    <div className='pj-art-top-left sm:w-2/3'>
                        <div className="">
                            <h3 className="font-bold text-4xl leading-normal">Disbursement of funs</h3>
                            <div className="text-xl">De <span>0x1625372828zde123332</span></div>
                        </div>
                        <div className="my-5 w-full">
                        Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus.
                        </div>
                    </div>
                    <div className='pj-art-top-right text-right sm:mt-3'>
                        <div className="font-bold text-xl">
                            Creation XX/XX/XX
                        </div>
                        <div className='inline-grid justify-items-end'>
                            <button className="text-black bg-yellow-400 rounded-xl text-xl px-6 py-1 mb-2 sm:mb-4 sm:mt-5" type="button">Website</button>
                            <button className="text-black bg-yellow-400 rounded-xl text-xl px-6 py-1 mb-2 sm:mb-4 sm:mt-5" type="button">WhitePaper</button>
                            <button className="text-black bg-yellow-400 rounded-xl text-xl px-6 py-1 mb-2 sm:mb-4 sm:mt-5" type="button">Social Networks</button>
                        </div>
                    </div>
                </div>
                <div className='art-body'>
                    {
                        moreArt && 
                        <div className='art-content border border-yellow-400 rounded-3xl p-4 sm:p-7'>
                            <div className="title-of-project mt-3">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Title of your project</h2>
                                <div>amque non umbratis fallaciis res age</div>
                            </div>

                            <div className="select-your-domain mt-3">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Select your domain</h2>
                                <div>
                                    <div className="rounded-full btn-default mx-1 max-w-max">
                                        Education
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-person mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Contact person</h2>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Name</div>
                                        <div className='w-80 sm:mr-5'>amque non</div>
                                    </div>
                                    <div className="flex-none input-group">
                                        <div className="font-bold">First name</div>
                                        <div className='w-80 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Telephone</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                    <div className="flex-none input-group">
                                        <div className="font-bold">LinkedIn</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Email</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                            </div>

                            <div className="who-are-the-key mt-3">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Who are the key people in your business and what do they do?</h2>
                                <div className="grid">
                                    
                                </div>
                            </div>

                            <div className="how-long-age mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">How long ago did you create your project?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="project-phase mt-3">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Project phase</h2>
                                <div>
                                    <div className="rounded-full btn-default mx-1 max-w-max">
                                        Amorcage
                                    </div>
                                </div>
                            </div>

                            <div className="who-are-you mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Who are you?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="what-are-you-doing mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">What are you doing?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="what-are-you-doing-it mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">What are you doing it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="major-innovation mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">What is the major innovation of your project?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="where-do-you-do-it mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Where do you do it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="how-do-you-do-it mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">How do you do it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="how-do-you-earn-money mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">How do you earn money?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="how-much-need mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">How much do you need?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="to-do-what mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">To do what?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="online-community mt-5">
                                <h2 className="font-bold text-2xl leading-normal mb-2">Links to your online community</h2>
                                <div className="grid">
                                    
                                </div>
                            </div>
                        </div>
                    }
                    <div className='art-bottom-btn flex justify-around'>
                        <div className='flex justify-center'>
                            {
                                !moreArt && 
                                <button className="text-black bg-yellow-400 rounded-xl text-xl px-6 py-1 mb-4 sm:mt-5 mx-2" 
                                        type="button"
                                        onClick={ () => setMoreArt(true) }>See more</button>
                            }
                            <button className="text-black bg-yellow-400 rounded-xl text-xl px-6 py-1 mb-4 sm:mt-5 mx-2" type="button">Download the form</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="art-card w-full flex justify-center mt-7">
                <div className="w-11/12 sm:w-2/3 bg-yellow-400 p-5 sm:p-7 text-center rounded-3xl">
                    <div className="art-card-title text-3xl font-bold">Voting ends in 10 days</div>
                    
                    <ProgressVar
                        class="text-center mt-2"
                        width="100%"
                        progress="75"
                        statusStyle={{}}
                        varStyle={{}}
                        />
                    <div className="">
                        <button className="text-white bg-black rounded-xl text-2xl px-6 py-1 mb-4 mt-5 mr-5" type="button">Approve</button>
                        <button className="text-white bg-black rounded-xl text-2xl px-6 py-1 mb-4 mt-5" type="button">Refuse</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;