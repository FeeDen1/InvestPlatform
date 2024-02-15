import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../routes/routes";

interface MoneyIconProperties {
    className?: string;
}

export const MoneyIcon: FC<MoneyIconProperties> = ({className = 'h-20 w-20 stroke-blue-400 max-md:h-10 max-md:w-10'}: MoneyIconProperties) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(RouteNames.MAIN_PAGE)}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/>
            </svg>
        </button>


    );
}