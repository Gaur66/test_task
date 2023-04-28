import React, { useEffect,useState } from 'react'
import DataTable,{ createTheme } from 'react-data-table-component'


const UserList = () => {
 

  const [data,setdata] =useState([])
const columns=[
  {
    name:"Name",
    selector:row=> row.name
  },
  {
    name:"Age/Sex",
    selector:row=> row.dob
  },
  {
    name:"Mobile",
    selector:row=> row.mobile
  },
  {
    name:"Address",
    selector:row=> row.address
  }
  , {
    name:"Govt_Id",
    selector:row=> row.Govtid
  }
  , {
    name:"Guardian_Details",
    selector:row=> row.guradianName

  },
  {
    name:"Nationality",
    selector:row=> row.nationality
  }

]
 useEffect(()=>{
getdata()
 },[])
const getdata =async()=>{
  let res= await fetch("http://localhost:4000/getdata",{
    method:'GET',
    })
res= await res.json()
setdata(res)
}

const customStyle= {
  headCells: {
    style: {
      backgroundColor:'green',
      fontWeight:"bold",
      fontSize:'12px',
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'black',
      color:"#fff",
      
    }
  },
  rows :{
    style:{
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'black',
      

    }
  }
}



  return (
    <>
    <div class="container-fluid">
    <DataTable
columns={columns}
data={data}
fixedHeader  
pagination
customStyles={customStyle}
>
    </DataTable>
    </div>
    </>
  )
}

export default UserList