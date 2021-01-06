import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState('...');
    useEffect(()=>{
        acessarPersonagens()
    },[])
async function acessarPersonagens(eve){
    
    try {
        const {data} = await swapi.get('/films?page=1'); 
        setDados(data.results);
        //console.log(data.data.results[1].title);       
        
    } catch (error) {
        console.log(error);
    }
}
return(<div>
ma peop

</div>)
}
export default PeopleList;
