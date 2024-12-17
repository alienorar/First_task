import './index.css'
import KadyImg from '../../assets/kady.svg'
import AiyshaImg from '../../assets/aiysha.svg'
import ArthurImg from '../../assets/Arthur.svg'

const Stories = () => {
    const StoryCards = [
        {
            id: 1,
            desc: " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
            author: "Kady Baker",
            status: "Product Manager at Bookmark",
            avatar: KadyImg,
        },
        {
            id: 2,
            desc: "“We needed to automate our entire onboarding process.The team came in and built out the whole journey.Since going live, user retention has gone through the roof!”",
            author: "Aiysha Reese",
            status: "Founder of Manage",
            avatar: AiyshaImg,
        },
        {
            id: 3,
            desc: " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
            author: "Arthur Clarke",
            status: "Co-founder of MyPhysio",
            avatar: ArthurImg,
        }
    ]
    return (
        <section className='stories'>
            <div className=" story_section container">
                <h2>Delivering real results for top companies. Some of <span>our success stories.</span></h2>
                <div className="stories_cards">
                    {
                        StoryCards?.map((item) => (
                            <div className="story_card" key={item.id}>
                                <p>{item.desc}</p>
                                <h4>{item.author}</h4>
                                <p>{item.status}</p>
                                <img src={item.avatar} alt="author_avatar" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Stories