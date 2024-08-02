import Output from "./components/Output";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

let App = () => {
    let [row, setRow] = useState();

    let [products, setProducts] = useState();

    
    const getData = async () => {
        const { data } = await axios("http://localhost:9000/getproducts");
        setProducts(data);
        console.log(data);
    };

    const setData = async (row) => {
        await axios.post("http://localhost:9000/addproducts", row);
        console.log("Data is saved");
    };

    useEffect(() => { 
        getData();
    }, []);

    let onImageChangeHandler = (event) => {
        setRow({ ...row, image: event.target.value });
        console.log(row);
    };
    let onIdChangeHandler = (event) => {
        setRow({ ...row, id: event.target.value });
        console.log(row);
    };
    let onNameChangeHandler = (event) => {
        setRow({ ...row, name: event.target.value });
        console.log(row);
    };
    let onSizeChangeHandler = (event) => {
        setRow({ ...row, size: event.target.value });
        console.log(row);
    };
    let onPriceChangeHandler = (event) => {
        setRow({ ...row, price: event.target.value });
        console.log(row);
    };
    let onDescChangeHandler = (event) => {
        setRow({ ...row, desc: event.target.value });
        console.log(row);
    };
    let onColorChangeHandler = (event) => {
        setRow({ ...row, color: event.target.value });
        console.log(row);
    };

    let addData = () => {
        // setProducts([...products, row]);
        setData(row);
        // const useEffect((row)=>{

        // },[]);
    };
    return (
        <div className="container">
            <div class="shop">
                <Output products={products}></Output>
            </div>
            
            <div className="form">
                <h1>Add Item</h1>
                <input
                    placeholder="Image Url"
                    onChange={onImageChangeHandler}
                ></input>
                <input
                    placeholder="Item ID"
                    onChange={onIdChangeHandler}
                ></input>
                <input
                    placeholder="Name"
                    onChange={onNameChangeHandler}
                ></input>
                <input
                    placeholder="Size"
                    onChange={onSizeChangeHandler}
                ></input>
                <input
                    placeholder="Price"
                    onChange={onPriceChangeHandler}
                ></input>
                <input
                    placeholder="Description"
                    onChange={onDescChangeHandler}
                ></input>
                <input
                    placeholder="Color"
                    onChange={onColorChangeHandler}
                ></input>

                <input type="button" onClick={addData} value="Add Item"></input>
            </div>
        </div>
    );
};

export default App;