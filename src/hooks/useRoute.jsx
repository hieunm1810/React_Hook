import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
//custom hook
export default function useRoute() {
    const navigate = useNavigate();
    const param = useParams();
    const [search,setSearch] = useSearchParams();
  return {navigate, param, searchParams: [search,setSearch]};
}
