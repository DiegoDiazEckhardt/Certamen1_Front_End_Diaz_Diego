import React, {useState} from 'react'
import GuerreroForm from '../components/GuerreroForm'
import GuerreroView from '../components/GuerreroView';

function GuerreroContainer() {
    const [guerreros, setGuerreros] = useState([]);
    const handleCreate = (guerrero)=>{
        setGuerreros([...guerreros,guerrero]);
    }
    const handleDelete = (guerrero)=>{
        const filtrado = guerreros.filter((j)=> {return j?.nombre != guerrero?.nombre});
        setGuerreros(filtrado);
    }
  return (
  <>
    <div className='container-fluid mt-3 px-4'>
        <div className='row'>
            <div className='col-md-4 mb-3'>
                <GuerreroForm onCreateGuerrero={handleCreate} />
            </div>
            <div className='col-md-8'>
                <GuerreroView guerreros={guerreros} onQuitar={handleDelete}/>
            </div>
        </div>
    </div>
  </>
  )
}
export default GuerreroContainer;
