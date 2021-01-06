import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';

const MovieList = ({selected}) =>{

    const [dados,setDados] = useState(false);
    
    useEffect(()=>{
        acessarFilmes();
    },[])

     
    function stringify (x) {
        console.log(Object.prototype.toString.call(x));
    }
    
    async function acessarFilmes(eve){
        //eve.preventDefault();
        try {
            const {data} = await swapi.get('/films?page=1'); 
            setDados(data.results);
            //console.log(data.data.results[1].title);  
        } catch (error) {
            console.log(error);
        }
    }
    
    return(<div>        
        <h5>-----Clique em um filme para saber os personagens------</h5>
        {
        dados ?
        dados.map(filme=>(
        <Paper elevation={3} variant="elevation"
        onClick={()=>selected(filme.characters)}        
        key={filme.episode_id}>
            <h4>titulo:{filme.title}</h4>
        </Paper>) )
        :
        <h6>nomovie</h6>
        
        }
        
        
        
    </div>)
}

export default MovieList;