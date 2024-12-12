import { useState, useEffect } from 'react';
import './App.css';
import Perfil from './Perfil';
import { getProfiles, addProfile } from './profileService.js';




export default function Page1(){
    return (
        <div>
          <h1>Bienvenido a Page1</h1>
        </div>
    );

}