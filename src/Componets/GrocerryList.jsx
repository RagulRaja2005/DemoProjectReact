import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GrocerryList() {

    let hosturl = ("http://localhost:3000/grocerrylist/")

    const [items, setitems] = useState([]);
    const [inputdata, setinputdata] = useState("");

    let handleapi = async () => {
        let res = await axios.get(hosturl)
        setitems(res.data)
    }
    useEffect(() => {
        handleapi()
    }, [])

    const handleitem = (event) => {
        setinputdata(event.target.value)
    }
    const handlepost = async () => {
        let body = {
            item: inputdata
        }
        let senddata = await axios.post(hosturl, body)
        handleapi()
    }

    const handledelete = async (delete_id) => {
        let response = await axios.delete(hosturl + delete_id)
        handleapi()

    }
    const handleedit = async (edit_item) => {
        let newdata = prompt("Update",edit_item.item)
        let datas = {
            item: newdata
        }

        let response2 = await axios.put(hosturl + edit_item.id, datas)
        handleapi()

    }
    return (
        <div>
            <input onChange={handleitem} placeholder="Enter Grocerrys" />
            <button onClick={handlepost}>ADD</button>


            <ol>
                {
                    items.map((da) => (
                        <div>
                            <li>{da.item}</li>
                            <button onClick={() => handleedit(da)}>Edit</button>
                            <button onClick={() => handledelete(da.id)}>Delete</button>

                        </div>
                    ))
                }
            </ol>
        </div>
    )
}
