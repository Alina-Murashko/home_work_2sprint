import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
           
            <Routes>
             
                <Route element={<Navigate to={'/pre-junior'}/>} path={'/'}/>
                <Route element={<PreJunior/>} path={'/pre-junior'}/>
                <Route element={<Junior/>} path={'/junior'}/>
                <Route element={<JuniorPlus/>} path={'/junior-plus'}/>


                <Route element={<Navigate to = {'/Error404'}/>} path={'/*'}/>
                <Route element={<Error404/>} path={'/Error404'}/>


            
            </Routes>
        </div>
    )
}

export default Pages
