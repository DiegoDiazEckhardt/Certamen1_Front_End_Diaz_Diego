import { Button, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Tab } from 'bootstrap'
import React from 'react'

export default function GuerreroView({guerreros=[], onQuitar = null}) {

const handleQuitar = (guerrero) =>{
    onQuitar(guerrero);
}
  return (
    <Card>
        <CardHeader title="Lista de guerreros"></CardHeader>
        <CardContent>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre del Guerrero</TableCell>
                            <TableCell>Tipo de Guerrero</TableCell>
                            <TableCell>Categoría</TableCell>
                            <TableCell>Nivel</TableCell>
                            <TableCell>Clasificación</TableCell>
                            <TableCell>Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {guerreros.map((j)=>
                            <TableRow key={j.nombre}>
                                <TableCell>{j.nombre}</TableCell>
                                <TableCell>{j.tipoGuerrero}</TableCell>
                                <TableCell>{j.categoria}</TableCell>                                
                                <TableCell>{j.nivelAmenaza}</TableCell>
                                <TableCell>{j.nivelCombate}</TableCell>
                                <TableCell>
                                    <Button variant='outlined' color='error' onClick={()=>handleQuitar(j)}>Asesinado por la aparición</Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  )
}
