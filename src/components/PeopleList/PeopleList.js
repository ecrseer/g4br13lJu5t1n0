import {swapi} from '../../../api';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Paper } from '@material-ui/core';

const PeopleList = ({selected}) =>{

    const [dados,setDados] = useState([]);
    const [personagens,setPersonagens] = useState(['','2']);

    useEffect(()=>{  
        a_a(selected)      
    },
    [selected])



async function a_a(arrLinks){    
    let arr = arrLinks;
    setDados([]);
    for (var i = 0; i < arr.length; i++) {
        try{
            const {data} = await axios.get(arr[i]);
            
            setDados(dados => [...dados, data]);
        }catch(erro){
          console.log(erro);
      }
    }
    

}
const cardPersonagem = (nome,index)=>{
    return(<Paper elevation={3}
        variant="elevation"                
           key={index}>
               <h4>nome:{nome}</h4>
           </Paper>)
}
return(
<div>
 <button onClick={()=>{a_a(selected)}}>a-a</button>
 <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxHeight: 300 }}
      >
        {dados?
            dados.map((personagem,index)=>{    
            return(cardPersonagem(personagem.name,index))    
        })
        :
        (<div></div>)
        }
 </Box>
</div>)
}
export default PeopleList;
