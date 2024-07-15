import Greeting from "./Greeting";
import UserProfileCard from "./UserProfileCard"

const App = () => {
    let data = {
        name: "itisha",
        age: 22,
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        location: "surat",
        profileImg: "https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg",
    };
    return (
        <div>
            <Greeting name="Itisha" />
            <UserProfileCard {...data} />

        </div>
    )
}
export default App