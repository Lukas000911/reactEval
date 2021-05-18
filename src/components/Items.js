import { useState } from 'react'
import { Link } from "react-router-dom"

function Items({ item, newValue, submitChange, addToFav, deletePost }) {

    let card

    const [updateTrigger, setUpdateTrigger] = useState(true);

    function submit() {
        submitChange()
        setUpdateTrigger(!updateTrigger)
    }


    if (updateTrigger) {
        card =
            <div key={item.key} className="card">
                <div><b>{item.title}</b></div>
                <div><img src={item.photo} alt="" /></div>
                <div>Price: {item.price}</div>
                <div>Quantity: {item.quantity}</div>
                <button onClick={() => setUpdateTrigger(!updateTrigger)}>Update</button>
                <button onClick={() => addToFav(item.id)}>Add to Favs</button>
                <button onClick={() => deletePost(item.id)}>DELETE</button>
            </div>
    } else {
        card =
            <div className="card">
                <div>
                    <h2>Enter data here:</h2>
                </div>
                <div>
                    <input onChange={newValue} type="text" placeholder="title" name="title" />
                </div>
                <div>
                    <input onChange={newValue} type="text" placeholder="photo" name="photo" />
                </div>
                <div>
                    <input onChange={newValue} type="text" placeholder="price" name="price" />
                </div>
                <div>
                    <input onChange={newValue} type="text" placeholder="quantity" name="quantity" />
                </div>
                <div>
                    <button onClick={submit}>Submit</button>
                </div>
                <div>
                    <button onClick={() => setUpdateTrigger(!updateTrigger)}>Cancel</button>
                </div>
            </div>
    }

    return (
        <div>
            <div className="itemsContainer">
                {card}
            </div>
        </div>
    );

}


export default Items;