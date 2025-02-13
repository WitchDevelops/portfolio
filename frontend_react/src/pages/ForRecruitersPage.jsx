import { Heading } from "../components/typography/Heading"
import { Skills } from "../container"

export const ForRecruitersPage = () => {
    return (
        <div className="app__wrapper app__flex">
            <Heading text="for" highlight="recruiters" />
            <div>
                Some of my experiences
                Maybe a counter for how long have I been developing
                pdf with CV
                and a button to dowload it
            </div>
            <Skills />
        </div>
    )
}
