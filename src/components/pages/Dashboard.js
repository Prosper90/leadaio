import React, {useState} from 'react'
import Navigation from '../dashboardUtils/Navigation'
import Findleads from "../dashboardUtils/Findleads";
import Manageleads from "../dashboardUtils/Manageleads";
import Reports from '../dashboardUtils/Reports';
import Contactleads from '../dashboardUtils/Contactleads';
import Seotools from '../dashboardUtils/Seotools';
import Notifier from '../dashboardUtils/Notifier';
import Profile from '../dashboardUtils/Profile';
import Home from '../dashboardUtils/Home';

export default function Dashboard() {
    const [page, setPages] = useState('home');


    const changePage = () => {
        switch (page) {
            case "home":
            
            return <Home />;

            case "findleads":
                
            return <Findleads />;

            case "manageleads":

            return <Manageleads />;

            case "reports":
            
            return <Reports />;

            case "contactleads":

            return <Contactleads />;

            case "seoTools":

            return <Seotools />;

            case "notifications":

            return <Notifier />;

            case "Profile":

            return <Profile />

            default:
            break;
         
         }
     }

  return (
    <div className='h-full'>
        <Navigation page={page} setPages={setPages} />

        <div className="flex justify-center items-center">
            {changePage()}
        </div>

    </div>
  )
}
