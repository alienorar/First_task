import './index.css'
import ExImg from '../../assets/experienced.svg'
import ImImg from '../../assets/implement.svg'
import ProImg from '../../assets/productivity.svg'

const Build = () => {
    const buildCards = [
        {
            id: 1,
            img: ExImg,
            title: "Experienced Individuals",
            desc: "Our network is made up of highly experienced professionals who are passionate about what they do."
        },
        {
            id: 2,
            img: ImImg,
            title: "Easy to Implement",
            desc: "Our network is made up of highly experienced professionals who are passionate about what they do."
        },
        {
            id: 3,
            img: ProImg,
            title: "Enhanced Productivity",
            desc: "Our network is made up of highly experienced professionals who are passionate about what they do."
        }
    ]

    return (
        <section className='build_section'>
            <div className="build container">
                <h2>Build & manage distributed teams like no one else.</h2>
                <div className='build_cards'>

                    {
                        buildCards?.map((item) => (
                            <div className='build_card' key={item.id}>
                                <div>
                                    <img src={item.img} alt="card_img" />
                                </div>
                                <div className="build_info">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </section>
    )
}

export default Build