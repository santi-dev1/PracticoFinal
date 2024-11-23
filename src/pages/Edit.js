import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { getSingleUser } from '../redux/action';
import { useParams, useNavigate } from 'react-router-dom'
import { updateUser } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        "& > *": {
            width: '50ch'
        },
    },
})
)

const Edit = () => {

const classes = useStyles()
let navigate = useNavigate() 

    const [state, setState] = useState({
        name: '',
        email: '',
        contact: '',
        gender: ''
    })

    const [error, setError] = useState("")
    
    const {id} = useParams()

    const {user} = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const {name, email, contact, gender} = state;

    useEffect(() => {
        dispatch(getSingleUser(id))   
    }, [])

    useEffect(() => {
        if (user) {
            setState({...user})
        }
    }, [user])

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name ||  !email || !contact || !gender){
            setError("Todos los campos son obligatorios")
        }
        else{
            dispatch(updateUser(state, id))
            navigate("/")
            setError("");
        }
    }
    

    return(
        <div>
            <h1>Editar usuario</h1>
            {error &&  <h3 styles={{color:"red"}}>{error}</h3>}
<form className={classes.root} noValidate autoComplete='off' onSubmit={handleSubmit}>
<TextField 
id="standard-basic" 
label="name" 
value={name || ""}
type="text"
name="name"
onChange={handleInputChange}
/> 
<br/>
<TextField 
id="standard-basic" 
label="email" 
value={email || ""}
type="email"
name="email"
onChange={handleInputChange}
variant="standard" 
/>  
<br/>
<TextField 
id="standard-basic" 
label="contact" 
value={contact || ""}
type="text"
name="contact"
onChange={handleInputChange}
variant="standard" 
/> 
<br/> 
<TextField 
id="standard-basic" 
label="gender" 
value={gender || ""}
type="text"
name="gender"
onChange={handleInputChange}
variant="standard" 
/>   
<br/>
<Button
    style={{width: "100px"}}
    color="primary"
    variant="contained"
    type="submit"
    startIcon={<EditIcon/>}
    onChange={handleInputChange}
        >
    Edit
</Button>
</form>
        </div>
    )
}

export default Edit