import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, loadUsers } from '../redux/action';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const Home = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    },[dispatch])

const handleDelete = (id) => {
    if (window.confirm("Estas seguro de que queres eliminarlo?")){
        dispatch(deleteUser(id))
    }
}

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow align="left">
          <Button
          color="success"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/addUser")}
          >
          Agregar registro  
          </Button>  
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                user ? (
                  <TableRow
                    key={user.id || index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{user.name || "Nombre no disponible"}</TableCell>
                    <TableCell align="center">{user.email || "Correo no disponible"}</TableCell>
                    <TableCell align="center">{user.contact || "Contacto no disponible"}</TableCell>
                    <TableCell align="center">{user.gender || "Género no disponible"}</TableCell>
                    <TableCell align="center">
                      <div className='{buttonStyles.root}'>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                          <Button
                            style={{ marginRight: '20px' }}
                            color="primary"
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={() => navigate(`/edit/${user.id}`)}
                          >
                            Editar
                          </Button>
                          <Button
                            style={{ marginLeft: '20px' }}
                            color="warning"
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(user.id)}
                          >
                            Eliminar
                          </Button>
                        </ButtonGroup>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : null
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">No hay usuarios disponibles</TableCell>
              </TableRow>
            )}
          </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home