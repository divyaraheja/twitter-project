import './../App.css';
import Trends from '../Components/Trends';
import SideBar from '../Components/SideBar';
import Twittes from '../Components/Twittes';

function profile() {
    return (
        <div class="profilecontainer">
            <SideBar />
            <Twittes />
            <Trends/>

        </div>
    );
}

export default profile;