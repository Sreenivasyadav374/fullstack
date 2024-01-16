import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import axios from 'axios';
import { useSelector } from 'react-redux';

function profile() {
  const [userName,setUserName]=useState('');
  //getting userdata from redux store
  const userdata=useSelector((state)=>state.setUser.value);

  useEffect(() => {
    
    const getProfile=async()=>{
      try{
        let profile=localStorage.getItem('userId'); 
        /*Setting profile data with a request to backend*/ 

        //const header = {Authorization: `Bearer ${localStorage.getItem('accessToken')}`};
        //let data=await axios.get(`http://localhost:3000/employees/${profile}`,{headers:header});

        //
        setUserName(userdata.userName);  
      }
      catch(err){
        console.log(err.message)
      }
    }
    getProfile();
  
    
  }, []);


  return (
    <>
    <div style={{height:'39.65rem'}} className='d-flex align-items-center'>
      {profile?
      
      <Card style={{ width: '18rem',height:'30rem',width:'30rem' }} className='mx-auto rounded-4  d-flex align-items-center justify-content-center'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      :
      <Card style={{ width: '18rem',height:'30rem',width:'30rem' }} className='mx-auto rounded-4  d-flex align-items-center justify-content-center'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
      
}
</div>
    
    </>
  );
}

export default profile