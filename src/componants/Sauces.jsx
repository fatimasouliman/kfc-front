import Cardcomponant from "./Cardcomponant"
import img from '../assest/images/images.jfif';
import '../assest/style/Cardstyle.css';
import { Container } from 'react-bootstrap';


function Sauces () {
    const data = [
    
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
        {
            title: "Buffalo Ranch",
            rate: "5.0",
            Pieces: "5",
            Calories: "15",
            price: " ",
            buy: "Buy Now",
        },
    ]
    return(
        
        <div className='cards row mt-5 w-100 m-auto gab-5 p-5'>
            <h1 className='col-12 ps-5'>Sauces</h1>
            { data.map(data => 
                    <Cardcomponant data={data} />
                )
            }
        </div>
    )
}
export default Sauces;