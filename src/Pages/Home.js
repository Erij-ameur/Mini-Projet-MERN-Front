import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MainLayout from '../Layout/MainLayout'
import "./../Styles/home.css"
const Home = (props) => {

    const [data, setdata] = useState([])

    const instance = axios.create({
        baseURL: "",
        timeout: 1000
    })
    const fetchData = async () => {
        let result = await instance.get('/todos')
        console.log(result.data)
        setdata(result.data)
    }
    useEffect(
        () => {
            fetchData()
        }, []
    )
    let ItemsOfData = data.map((item) => { return <h1> {item.title} </h1> })
    console.log(ItemsOfData)
    return (
        <MainLayout>
            <h1 className="hh">Artworks</h1>
            <div className='row-container'>
                <img src="./img/cabin.png" className="imgH" />
                <img src="./img/cake.png" className="imgH" />
                <img src="./img/circus.png" className="imgH" />
                <img src="./img/game.png" className="imgH" />
                <img src="./img/safe.png" className="imgH" />
                <img src="./img/submarine.png" className="imgH" />
                {ItemsOfData}
            </div>



        </MainLayout>
    )
}

export default Home
