import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormSchema } from './Schema/FormSchema';
import { formSchema } from './Schema/FormSchema';
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const navigation=useNavigate()
 const {register, handleSubmit, formState:{errors},reset} = useForm({
    resolver: yupResolver(formSchema)
 })

 const formSubmitHandler = async(Data)=>{
 
  let res= await fetch("http://localhost:4000/form",{
    method:'POST',
    body:JSON.stringify(Data),
    headers:{
        'Content-Type':'application/json'
    }
  })
res= await res.json()
  
  navigation('/userlist')
}

const handleClear=()=>{
   
    reset({name:'',
dob:'',
sex:'',
mobile:'',
idtype:'',
Govtid:'',
guradianlabel:'',
guradianName:'',
emergencyno:'',
address:'',
city:'',
state:'',
pincode:'',
occupation:'',
maritalstatus:'',
religion:'',
bloodgroup:'',
nationality:''


});
}

 
  return (
<>
<div className='container'>
<form onSubmit={handleSubmit(formSubmitHandler)}>
  <div className="form-group row mb-3 mt-5">
    <h6>Personal Details</h6>
    <label for="name" className="col-sm-1 col-form-label">Name</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="name" placeholder="Enter Name" {...register("name")}/>
      {errors.name?(<span style={{color:"red"}}>{errors.name.message}</span>):<></>}
    </div>
    <label for="dob" className="col-sm-2 col-form-label" >Date of Birth or <p>Age </p> </label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="dob" placeholder="DD/MM/YYYY or Age in Years" {...register("dob")}/>
      {errors.dob?(<span style={{color:"red"}}>{errors.dob.message}</span>):<></>}
    </div>
    <label for="sex" className="col-sm-1 col-form-label">Sex</label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name='sex' {...register("sex")}>
  <option value=""> Enter Sex</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
 
</select>
{errors.sex?(<span style={{color:"red"}}>{errors.sex.message}</span>):<></>}
    </div>
  </div>
  <div className="form-group row">
    <label for="mobile" className="col-sm-1 col-form-label">Mobile</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="mobile" placeholder="Enter Mobile" {...register("mobile")}/>
      {errors.mobile?(<span style={{color:"red"}}>{errors.mobile.message}</span>):<></>}
    </div>
    <label for="id" className="col-sm-2 col-form-label" >Govt Issued ID</label>
    <div className="col-sm-2  ">
    <select className="form-select" aria-label="Default select example" name="idtype" {...register("idtype")}>
  <option value=""> ID Type</option>
  <option value="Aadhar">Aadhar</option>
  <option value="PAN">PAN</option>
</select>
{errors.idtype?(<span style={{color:"red"}}>{errors.idtype.message}</span>):<></>}
    </div>
    
    <div className="col-sm-4">
      <input type="text" className="form-control" name="Govtid" placeholder=" Enter Govt ID" {...register("Govtid")}/>
      {errors.Govtid?(<span style={{color:"red"}}>{errors.Govtid.message}</span>):<></>}
    </div>
  </div>
  <div className="form-group row mb-3 mt-3">
    <h6>Contact Details</h6>
   
    <label for="guardianlabel" className="col-sm-1 col-form-label" >Guradian Details</label>
    <div className="col-sm-1 ">
    <select className="form-select" aria-label="Default select example" name='guardianlabel' {...register("guardianlabel")}>
  <option value=""> Enter Label</option>
  <option value="Father">Father</option>
  <option value="Mother">Mother</option>

</select>
    </div>
    <div className="col-sm-2">
      <input type="text" className="form-control" name="guardianName" placeholder=" Enter Guradian Name" {...register("guardianName")}/>
    </div>
    <label for="email" className="col-sm-1 col-form-label">Email</label>
    <div className="col-sm-3">
      <input type="email" className="form-control" name="email" placeholder="Enter Email" {...register("email")}/>
    </div>
    <label for="emergencyno" className="col-sm-2 col-form-label">Emergency Contact Number</label>
    <div className="col-sm-2">
      <input type="text" className="form-control" name="emergencyno" placeholder="Enter Emergency No"  {...register("emergencyno")}/>
      {errors.emergencyno?(<span style={{color:"red"}}>{errors.emergencyno.message}</span>):<></>}
    </div>

  </div>
  <div className="form-group row mb-3 mt-3">
    <h6>Personal Details</h6>
    <label for="address" className="col-sm-1 col-form-label">Address</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="address" placeholder="Enter Address" {...register("address")}/>
    </div>
    <label for="state" className="col-sm-1 col-form-label">State</label>
    <div className="col-sm-3">
    <select className="form-select" aria-label="Default select example" name="state" {...register("state")}>
  <option value=""> Enter State</option>
  <option value="delhi">delhi</option>
  <option value="haryana">haryana</option>
  <option value="bihar">bihar</option>
</select>
    </div>
    <label for="city" className="col-sm-1 col-form-label">City</label>
    <div className="col-sm-3">
    <select className="form-select" aria-label="Default select example" name="city" {...register("city")}>
  <option value=""> Enter City/Town/Village</option>
  <option value="darbhanga">Darbhanga</option>
  <option value="gurgaon">gurgaon</option>
  <option value="noida">noida</option>
</select>
    </div>
    <label for="country" className="col-sm-1 col-form-label mt-2">Country</label>
    <div className="col-sm-3 mt-2">
    <div className="form-group" style={{position:'relative'}}>
    <input type="text" className="form-control" name="country" {...register("country")}/>   
    <i className="bi bi-x-lg" style={{position:'absolute',top:'calc(22%)',right:'1rem'}}></i>
       </div>    
           
     </div>
     <label for="pincode" className="col-sm-1 col-form-label mt-2">Pincode</label>
    <div className="col-sm-3">
      <input type="text" className="form-control mt-2" name="pincode" placeholder="Enter Pincode" {...register("pincode")}/>
    </div>
 
  </div>
  <div className="form-group row mb-3 mt-3">
    <h6>Other Details</h6>
    <label for="occupation" className="col-sm-1 col-form-label">Occupation</label>
    <div className="col-sm-3">
      <input type="text" className="form-control" name="occupation" placeholder="Enter Occupation" {...register("occupation")}/>
    </div>
    <label for="religion" className="col-sm-1 col-form-label">Religion</label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name="religion" {...register("religion")}>
  <option value=""> Enter Religion</option>
  <option value="hindu">Hindu</option>
  <option value="muslim">Muslim</option>
  <option value="christan">Christan</option>
</select>
    </div>
    <label for="maritalstatus" className="col-sm-1 col-form-label">Marital Status </label>
    <div className="col-sm-2">
    <select className="form-select" aria-label="Default select example" name="maritalstatus" {...register("maritalstatus")}>
  <option value=""> Enter Marital Status</option>
  <option value="single">Single</option>
  <option value="married">Married</option>
  
</select>
    </div>
    <label for="bloodgroup" className="col-sm-1 col-form-label formstyle" >Blood Group</label>
    <div className="col-sm-1">
    <select className="form-select" aria-label="Default select example" name="bloodgroup" {...register("bloodgroup")}>
  <option value="">Group</option>
  <option value="A+">A+</option>
  <option value="B+">B+</option>
  <option value="o+">o+</option>
</select>
    </div>
    <label for="nationality" className="col-sm-1 col-form-label mt-2">Nationality</label>
    <div className="col-sm-3 mt-2">
    <div className="form-group" style={{position:'relative'}}>
    <input type="text" className="form-control" name="nationality" {...register("nationality")}/>   
    <i className="bi bi-x-lg" style={{position:'absolute',top:'calc(22%)',right:'1rem'}}></i>
       </div>    
           
     </div>
  </div>



    <div className=" text-end">
    <button type="button" className="btn btn-outline-danger" onClick={handleClear}>cancel</button>
    <button type="submit" className="btn btn-success">Submit</button>
  </div>

  </form>
 
   </div>
  





       







</>
  )
}

export default Home