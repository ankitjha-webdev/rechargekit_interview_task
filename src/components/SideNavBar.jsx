import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const SideNavBar = () => {
    const dataUrl = "http://localhost:3000/data";
    const [data, setData] = React.useState(null);

    useEffect(() => {
        axios.get(dataUrl)
            .then((res) => {
                setData(res.data);
                // console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
    },[]);

    // data && console.log(data[1].firstName);
    return (
        <div>
            {/* Showing user information in a list view*/}

            {/* Bootstrap Table to print Json Data*/}

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Curent Address</th>
                        <th scope="col">Permanent address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.mobNumber}</td>
                                <td>
                                    {item.currentAddr.map((adr) => (
                                        <div>
                                            <p>{adr.street} , {adr.city}</p>
                                            <p>{adr.state} , {adr.zip}</p>
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    {item.permamentAddr.map((adr) => (
                                        <div>
                                            <p>{adr.street} , {adr.city}</p>
                                            <p>{adr.state} , {adr.zip}</p>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* Form Output */}

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                    <input type="text" class="form-control" value={data && data[4].firstName} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Last Name</label>
                    <input type="text" value={data && data[4].lastName} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                    <input type="text" value={data && data[4].mobNumber} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Current Address</label>
                    <input type="text" value={data && data[4].currentAddr[0].street} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Permanent Address</label>
                    <input type="text" value={data && data[4].permamentAddr[0].street} class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default SideNavBar