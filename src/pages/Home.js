import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../redux/action';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { ButtonGroup } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'


const useButtonStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alingItems: 'center',
        '& > *': {
            margin: 5,
        },
    },
}))

const Home = () => {
    let dispatch = useDispatch()

    const { users } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsers())
    },[dispatch])

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.contact}</TableCell>
              <TableCell align="center">
                <div className='{buttonStyles.root}'>
                    <ButtonGroup variant="outlined" arial-label="outlined button group">
                    <Button
                    style={{marginRight: '20px'}}
                    color="primary"
                    variant="contained"
                    startIcon={<EditIcon/>}
                    >
                        Editar
                    </Button>
                    <Button>Eliminar</Button>
                    </ButtonGroup>
                </div>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home