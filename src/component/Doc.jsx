import React,{  useEffect, useState} from 'react'
import { Modal,Button, Col,Row } from 'react-bootstrap';
import {TextField} from '@mui/material';
import { db } from '../config/firebase';
import { getDocs,collection, addDoc,deleteDoc,doc ,updateDoc} from 'firebase/firestore';
import { Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



function Doc() {

    const[channellist,setChannellist] = useState([])

    const channelCollectionRef = collection(db,"yttext");
    const[ytChannelName,setYtChannelName] = useState("");
    const[ytDescription,setYtDescription] = useState("")
    const[deleteDocs,setDeleteDocs] =useState(false)
    const[uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})






  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




 

  








const deleteChannel = async(id)=>{
 const channelDoc =  doc(db,"yttext",id);
 setDeleteDocs(true)
 await deleteDoc(channelDoc)

}



  const getChannellist = async()=>{
   const data  =  await getDocs(channelCollectionRef)
 const filteredData =  data.docs.map((doc)=>(
    {
        ...doc.data(),
        id:doc.id
    }
   ))
   setChannellist(filteredData);
  }

  useEffect(()=>{
    getChannellist()
    
  },[uploadVideoServerResponse,deleteDocs])

  const handleUpload = async()=>{
    await addDoc(channelCollectionRef,{
        title:ytChannelName
        
    })
    
if(!ytChannelName){
    toast.warning("please fill form completely!!!")
}else{
    setUploadVideoServerResponse(ytChannelName)
   
    toast.success('successfully created th document!!')

}
setYtChannelName('')

    handleClose()
  }




  
  

  

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center flex-column'>
          <h3 className='mb-3 mt-3'>Drop Your Skills</h3>
          <div style={{height:'30vh'}} className=' d-flex justify-content-center align-items-center border border-secondary rounded shadow p-5 w-25 flex-column'>
              <button onClick={handleShow} style={{fontSize:'35px'}} className=' p-3 rounded shadow border border-dark text-dark bg-warning'><i className="fa-solid fa-plus fa-beat-fade"></i> Document</button>
  
          </div>
  
           <Modal show={show} onHide={handleClose} >
          
          <Modal.Body>
            <p>Add Your Skill </p>
            
    
    <TextField id="outlined-basic" label="Title" variant="outlined"  value={ytChannelName} onChange={(e)=>setYtChannelName(e.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <Button className="secondary" onClick={handleClose} >
              Cancel
            </Button>
            <Button className="primary" onClick={handleUpload}  >
              Upload
            </Button>
          </Modal.Footer>
        </Modal>

       <Row className='d-flex justify-content-between'>
            {
                channellist.map((channel)=>(
                
                    <Col sm={12} md={6} lg={4} xl={4} key={channel.id}>
                        <Card style={{ width: '18rem' }} className="col-lg-9 mt-5 border border-dark shadow" >
                  <Card.Body>
                   <div className='d-flex  align-items-center mb-3'>
                        <Card.Title className='d-flex justify-content-center'>{channel.title}</Card.Title>
                        <div className='ms-auto d-flex justify-content-between align-items-center'>
                           <Link to={'/description'}> <button  className='border border shadow rounded  p-2 '><i className="fa-solid fa-pen-to-square "></i></button></Link>
                            <button onClick={() => deleteChannel(channel.id)} className='border rounded shadow p-2 ms-3'><i className="fa-solid fa-trash text-danger "></i></button>
                        </div>
                   </div>
                    <div  >
                    
                        <div style={{height:'10vh'}} className='w-100 border shadow rounded'>{channel.titledescription}</div>
                        
                    
                    </div>
                  </Card.Body>
                </Card>
                    </Col>
                ))
        }
       </Row>
  
      </div>
      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}/>
     
    </>
  )
}

export default Doc