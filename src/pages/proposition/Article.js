import ProgressVar from '../../components/ProgressVar';

const Article = () => {
    return (
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <div className="header-selection flex justify-between mt-5">
                <div className="">
                    <h3 className="font-bold text-4xl leading-normal">Disbursement of funs</h3>
                    <div className="text-xl">De <span>0x1625372828zde123332</span></div>
                </div>
                <div className="font-bold text-xl">
                    Creation XX/XX/XX
                </div>
            </div>
            <div className="my-5 w-full">
            Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus.
            </div>
            <div className="art-card w-full flex justify-center">
                <div className="w-2/3 bg-yellow-400 p-7 text-center rounded-3xl">
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