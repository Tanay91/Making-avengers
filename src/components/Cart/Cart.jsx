/* eslint-disable react/prop-types */


const Cart = ({selectedActors,remaining,totalCost}) => {
    
    return (
        <div>
           <h2 className="text-3xl font-bold">This is Cart</h2>
           <h5>Remaining: ${remaining}</h5>
           <h5>Total Cost: ${totalCost}</h5>
           <h4>Total Actors: {selectedActors.length}</h4> 
           {
            selectedActors.map(actor=> <li key={actor.id}>{actor.name}</li>
                )
           }
        </div>
    );
};

export default Cart;