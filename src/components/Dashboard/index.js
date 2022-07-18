import React from 'react'
import {Card , Typography , CardContent, Button} from '@mui/material'
import {useAuth} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

export default function Dashboard() {
    const {currentUser , logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        await logout();
        navigate("/login")
    }
  return (
    <Card sx={{ width: 500, marginBottom:5  }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Profile
              </Typography>
              <Typography>
              Email: {currentUser.email}
              </Typography>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </CardContent>
          </Card>
  )
}
