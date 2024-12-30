import Card from "./Card.jsx"
import thumbnail from './assets/project-icon.png'
import archetype from './assets/archetype-chronicles-thumbnail.png'
import goldReserves from './assets/gold-reserves.png'
import flag from './assets/fictional-nation.png'
import gkFerre from './assets/gk-ferre.png'
import dice from './assets/dice-and-dungeons.png'
import freeBGMS from './assets/freeBGMS.png'

function Projects() {
    return(
        <div className="project-container">
            <h1 className="project-container-title">My Works</h1>
            <div className="card-organizer">
                <Card
                    img={archetype}
                    title="Archetype Chronicles"
                    description="Take our fun and interactive archetype quiz to uncover your legendary role—whether you're a fierce warrior, a crafty rogue, a wise mage, or something entirely unique. Reveal your true destiny today!"
                />
                <Card
                    img={goldReserves}
                    title="Golden Standard 1971"
                    description="is a website that converts dollar amounts into gold based on the 1971 exchange rate of $35 per ounce. It educates users on the gold standard’s history with an interactive calculator, timelines, and visual data."
                />
                <Card
                    img={flag}
                    title="Design-a-Nation"
                    description="is an interactive app where users can design custom national flags, choosing colors, symbols, and government types. It offers creative fun and educational insights into flag symbolism and government systems."
                />
                <Card
                    img={gkFerre}
                    title="Biryani House"
                    description="is an e-commerce website that lets customers easily order authentic biryani online. It offers customizable menu options, secure payment methods, and convenient delivery or pick-up. The site also features order tracking, customer reviews, and a loyalty program for a better dining experience."
                />
                <Card
                    img={dice}
                    title="Dice & Dungeons"
                    description="is a mini RPG where players use dice rolls to battle, solve challenges, and explore dungeons. With customizable characters and turn-based combat, each adventure offers unique outcomes. A fast-paced, dice-driven experience for RPG fans." 
                />
                <Card
                    img={freeBGMS}
                    title="Free BGMs"
                    description=" offers a collection of royalty-free background music tracks for use in games, videos, and other creative projects. All music is composed and available for free download, designed to enhance your project’s atmosphere."/>
            </div>
        </div>
    );
}

export default Projects;