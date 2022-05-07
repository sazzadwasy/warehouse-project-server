import React from 'react';
import { Link } from 'react-router-dom';
import useInventoryes from '../../hooks/useInventoryes';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventoryes, setInventoryes] = useInventoryes()
    return (
        <div>
            <h1 className='text-center'>All Inventory Items</h1>
            <div className='all-inventoryes container'>
                {
                    inventoryes.map(inventory =>
                        <div className='inventory' key={inventory._id}>
                            <img className="w-75" src={inventory.img} alt='' />
                            <h3 className="card-title text-center">{inventory.name}</h3>
                            <p className="card-text">{inventory.description}</p>
                            <p className="card-text fw-bold">Supplier : {inventory.supplier}</p>
                            <p className="card-text fw-bold">Price : {inventory.price}</p>
                            <p className="card-text fw-bold">Quantity : {inventory.quantity}</p>
                            <button className='detail-buttons'>Delete</button>
                        </div>

                    )
                }
            </div>
            <div className='text-center mb-4'>
                <Link to='/additems'><button className=' detail-buttons'>Add new item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;