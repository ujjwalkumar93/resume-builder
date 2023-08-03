import PersonalDetails from "../components/userInput/PersonalDetails";
import ExperianceDetail from "../components/userInput/ExperianceDetail";
import EducationDetail from "../components/userInput/EducationDetail";
const ComponentSelector = ({ pageIndex }) => {
    switch (pageIndex) {
        case 1:
            return <PersonalDetails />
        case 2:
            return <ExperianceDetail />
        case 3:
            return <EducationDetail />
    }
}

export default ComponentSelector;