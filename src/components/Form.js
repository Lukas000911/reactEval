import { useState } from 'react'
import { Link } from "react-router-dom"

function Form({ sendData }) {


    const [getData, setData] = useState({
        title: '',
        photo: '',
        price: '',
        quantity: '',
        id: Date.now(),
        favorites: false
    })

    function formData(event) {
        const value = event.target.value
        setData({ ...getData, [event.target.name]: value })
    }

    return (
        <div>
            <div>
                <h2>Enter data here:</h2>
            </div>
            <div>
                <input onChange={formData} type="text" placeholder="title" name="title" />
            </div>
            <div>
                <input onChange={formData} type="text" placeholder="photo" name="photo" />
            </div>
            <div>
                <input onChange={formData} type="text" placeholder="price" name="price" />
            </div>
            <div>
                <input onChange={formData} type="text" placeholder="quantity" name="quantity" />
            </div>
            <div>
                <button onClick={() => sendData(getData)}><Link to="/items">Submit</Link></button>
            </div>
            <div>
                <button>
                    <Link to="/items">See Item list</Link>
                </button>
            </div>
        </div>
    );

}


export default Form;