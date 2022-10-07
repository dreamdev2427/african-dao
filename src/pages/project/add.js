import {
    useEffect
} from "react";

const AddProject = () => {
    useEffect(() => {
    }, []);

    return (
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <h1 className="font-bold text-4xl leading-normal mt-5">Projects</h1>

            <div className="title-of-project mt-3">
                <h2 className="font-bold text-2xl leading-normal mb-2">Title of your project</h2>
                <input type='text' class="input-default w-96" />
            </div>

            <div className="select-your-domain mt-3">
                <h2 className="font-bold text-2xl leading-normal mb-2">Select your domain</h2>
                <div className="flex flex-wrap">
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Education
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Health
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Environment
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        fight against counterfeiting
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        fight against food insufficiency
                    </button>
                </div>
            </div>
            
            <div className="contact-person mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">Contact person</h2>
                <div className="flex flex-wrap">
                    <div className="flex-none input-group">
                        <div className="font-bold">Name</div>
                        <input type="text" className="input-default" />
                    </div>
                    <div className="flex-none input-group">
                        <div className="font-bold">First name</div>
                        <input type="text" className="input-default" />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-none input-group">
                        <div className="font-bold">Telephone</div>
                        <input type="text" className="input-default w-96" />
                    </div>
                    <div className="flex-none input-group">
                        <div className="font-bold">LinkedIn</div>
                        <input type="text" className="input-default w-96" />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-none input-group">
                        <div className="font-bold">Email</div>
                        <input type="email" className="input-default w-96" />
                    </div>
                </div>
            </div>

            <div className="who-are-the-key mt-3">
                <h2 className="font-bold text-2xl leading-normal mb-2">Who are the key people in your business and what do they do?</h2>
                <div className="grid">
                    <div>
                        <i className="fa fa-plus-circle text-2xl"></i>
                        <span className="ml-2 font-bold">Add a person</span>
                    </div>
                    <div className="person-info card-box ml-8">
                        <div className="flex flex-wrap">
                            <div className="flex-none input-group">
                                <div className="font-bold">Name</div>
                                <input type="text" className="input-default" style={{width: '253px'}} />
                            </div>
                            <div className="flex-none input-group">
                                <div className="font-bold">Fast Name</div>
                                <input type="text" className="input-default" style={{width: '253px'}} />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="flex-none input-group">
                                <div className="font-bold">Telephone</div>
                                <input type="text" className="input-default" style={{width: '360px'}} />
                            </div>
                            <div className="flex-none input-group">
                                <div className="font-bold">LinkedIn</div>
                                <input type="text" className="input-default" style={{width: '360px'}} />
                            </div>
                        </div>
                        <div>
                            <button className="text-white bg-black px-7 py-2 rounded-lg" type="button">add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="how-long-age mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">How long ago did you create your project?</h2>
                <input type='text' class="input-default w-96" />
            </div>

            <div className="project-phase mt-3">
                <h2 className="font-bold text-2xl leading-normal mb-2">Project phase</h2>
                <div>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Amorcage
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Scaling
                    </button>
                    <button type="button" className="rounded-full btn-default mx-1 mb-2">
                        Epansion
                    </button>
                </div>
            </div>

            <div className="who-are-you mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">Who are you?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="what-are-you-doing mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">What are you doing?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="what-are-you-doing-it mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">What are you doing it?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="major-innovation mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">What is the major innovation of your project?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="where-do-you-do-it mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">Where do you do it?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="how-do-you-do-it mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">How do you do it?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="how-do-you-earn-money mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">How do you earn money?</h2>
                <input type='text' class="input-default w-96" />
            </div>

            <div className="how-much-need mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">How much do you need?</h2>
                <input type='text' class="input-default w-96" />
            </div>

            <div className="to-do-what mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">To do what?</h2>
                <textarea className="input-default w-full" style={{height: '131px'}}></textarea>
            </div>

            <div className="online-community mt-5">
                <h2 className="font-bold text-2xl leading-normal mb-2">Links to your online community</h2>
                <div className="grid">
                    <div>
                        <i className="fa fa-plus-circle text-2xl"></i>
                        <span className="ml-2 font-bold">Add a link</span>
                    </div>
                    <div className="person-info card-box ml-8 w-max">
                        <div className="flex">
                            <div className="flex-none input-group">
                                <div className="font-bold">Title</div>
                                <input type="text" className="input-default" style={{width: '253px'}} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-none input-group">
                                <div className="font-bold">Link</div>
                                <input type="text" className="input-default" style={{width: '360px'}} />
                            </div>
                        </div>
                        <div>
                            <button className="text-white bg-black px-7 py-2 rounded-lg" type="button">add</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="form-btns inline-grid mt-6">
                <button className="text-black font-bold bg-yellow-400 px-7 py-2 rounded-lg mb-5" type="button">View the form</button>
                <button className="text-black font-bold bg-yellow-400 px-7 py-2 rounded-lg mb-5" type="button">Send the form</button>
            </div>

        </div>
    );
};

export default AddProject;