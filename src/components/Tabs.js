import { useDispatch } from "react-redux";
import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch()
    return(
        TABS.map(tabs =>(
            <button className = {tabs === currentTab ? 'button selected':'button' } onClick={()=>dispatch(toggleTab(tabs))}>
                {tabs}
            </button>
        ))
    )
}

export default Tabs;