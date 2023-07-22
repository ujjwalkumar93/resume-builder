import PersonalDetails from "../components/userInput/PersonalDetails";
import ExperianceDetail from "../components/userInput/ExperianceDetail";
const ComponentSelector = ({ pageIndex }) => {
    switch (pageIndex) {
        case 1:
            return <PersonalDetails />
        case 2:
            return <ExperianceDetail />
    }
}

export default ComponentSelector;