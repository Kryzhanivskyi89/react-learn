import React, {useEffect, useState } from "react";
import { getNews } from "../../services/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";
import { useCustomContex } from "../../testContext/Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSearchThunk, getNewsThunk } from "../../store/news/thunk";

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    FULFILLED: 'fulfilled',
}

const ContentInfo = ({ searchText }) => {
    const dispatch = useDispatch()
    const { news, status, error } = useSelector ((state) => state.news)

    useEffect(() => {
        dispatch(getNewsThunk())
    }, [dispatch])

    useEffect(() => {
        if (!searchText) return
        dispatch(getNewsSearchThunk(searchText))
    }, [dispatch, searchText])
    


    if (status === STATUS.PENDING) return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
           
        else if (status === STATUS.FULFILLED) return (
            <ul>
                { news.map(el => {
                    return <li key={el.url}>{el.title}</li>
                })}
            </ul>
        )
            
        else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
         
}

export default ContentInfo

// const ContentInfo = ({ searchText }) => {
//     const { news, setNews } = useCustomContex()
    
//     const [error, setError] = useState('')
//     const [status, setStatus] = useState(STATUS.IDLE)

//     useEffect(() => {
//         news && setStatus(STATUS.RESOLVED)
//     }, [news])

//     useEffect(() => {
//         if (!searchText) return
//             setStatus ( STATUS.PENDING )
//             getNews(searchText)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     if (data.status === "ok") {
//                         setNews(data.articles)
//                         setStatus(STATUS.RESOLVED)
//                     } else return Promise.reject(data.message)
//                 })
//                 .catch((error) => {
//                     setError(error)
//                     setStatus(STATUS.REJECTED)
//                 })
// }, [searchText, setNews])

//   if (status === STATUS.PENDING) return (
//             <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//             </div>
//         )
           
//         else if (status === STATUS.RESOLVED) return (
//             <ul>
//                 { news.map(el => {
//                     return <li key={el.url}>{el.title}</li>
//                 })}
//             </ul>
//         )
            
//         else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
         
// }