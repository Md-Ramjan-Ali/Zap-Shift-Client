import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyParcel = () => {
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()

  const {data: parcer=[]}=useQuery({
    queryKey: ['myParcel',user.email],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data
    }
  })

  console.log(parcer);
  return (
    <div>
      {/* <h1>This is  my parcel : {data?data.length:''}</h1> */}
      <h1>This is  my parcel : {parcer.length}</h1>
    </div>
  );
};

export default MyParcel;