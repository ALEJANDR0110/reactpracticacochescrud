import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import CreateCoche from './CreateCoche'
import UpdateCoche from './UpdateCoche'

export default class Router extends Component {
    render() {
        function UpdateCocheElement() {
            let {idcoche} = useParams();

            return(<UpdateCoche idcoche={idcoche} />)
        }

        return (
            <BrowserRouter>
                <MenuComponent />
                <div className="pt-20"></div>
                <Routes>
                    <Route path='/' element={<HomeComponent />}/>
                    <Route path='/createCoche' element={<CreateCoche />}/>
                    <Route path='/updateCoche/:idcoche' element={<UpdateCocheElement />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
