import { Box, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Rating, Select, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function GuerreroForm({onCreateGuerrero= () =>{}}) {
  const categoriaGuerrero = [{ label: "Capitán", value: "capitan"}, 
    {label: "Berserker", value:"berserker"}, 
    {label: "Explorador", value:"explorador"}, 
    {label: "Asediador", value: "asediador"}];
  const [nombreGuerrero, setNombreGuerrero] = useState("");
  const [tipoGuerrero, setTipoGuerrero] = useState("");  
  const [nivelCombate, setNivelCombate] = useState(1);
  const [categoria, setCategoria] = useState(categoriaGuerrero[0].value);
  const [nivelAmenaza, setNivelAmenaza] = useState(1);

  const HandleClick = () =>{
    const guerrero = {};
    guerrero.nombre = nombreGuerrero;
    guerrero.tipoGuerrero = tipoGuerrero;
    guerrero.nivelCombate = nivelCombate;
    guerrero.categoria = categoria;
    guerrero.nivelAmenaza = nivelAmenaza;
    console.log(guerrero);
    onCreateGuerrero(guerrero);
  }

  return (<Card raised>
                <CardHeader title="Registre a su guerrero">
                   
                </CardHeader>
                <CardContent>
                    <div className='mt-3'>
                        <TextField label="Nombre" value={nombreGuerrero} 
                        onChange={e=>setNombreGuerrero(e.target.value)} fullWidth>
                        </TextField>
                    </div>
                    <div className='mt-3'>
                        <FormControl>
                            <FormLabel>Tipo de guerrero</FormLabel>
                            <RadioGroup name='radio-buttons-group' value={tipoGuerrero} onChange={e=>setTipoGuerrero(e.target.value)}>
                                <FormControlLabel value="Orco" control={<Radio />} label="Orco"></FormControlLabel>
                                <FormControlLabel value="Uruk" control={<Radio />} label="Uruk"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>                        
                    </div>
                    <div className='mt-3'>
                        <FormLabel>Nivel de combate</FormLabel>
                        <Box sx={{ width: '100%' }}>
                        <Slider
                            size="small"
                            value={nivelCombate}
                            onChange={(e, newValue) => setNivelCombate(newValue)}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            min={1}
                        />
                        </Box>                   
                    </div>
                    <div className='mt-3'>
                        <Select fullWidth value={categoria} onChange={e=>setCategoria(e.target.value)} label="Categoria">
                            { categoriaGuerrero.map((c)=> <MenuItem value={c.value}>{c.label}</MenuItem>)}
                        </Select>
                    </div>
                    <div className='mt-3'>
                        <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Typography component="legend">Nivel de amenaza</Typography>
                        <Rating
                            name="simple-controlled"
                            value={nivelAmenaza}
                            onChange={(event, newValue) => {
                            setNivelAmenaza(newValue);
                            }}
                        />
                        </Box>                        
                    </div>             
                </CardContent>
                <CardActions>
                    <Button onClick={HandleClick} fullWidth variant='outlined' color='secondary'>Registrar guerrero</Button>
                </CardActions>
        </Card>
  )
}

export default GuerreroForm
