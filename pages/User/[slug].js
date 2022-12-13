import {useRouter} from 'next/router'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const User=()=>{
   const [data,setdata]=useState();
    const router = useRouter();
    useEffect(()=>{
       
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/user?slug=${slug}`)
        .then((res)=>{return res.json()})
        .then((data)=>setdata(data))
        
    },[router.isReady])
   
    return  (
        <>
            <nav>
                <div className={styles.navbar}>
                    <h2 className={styles.navbar}>Instagram</h2>
                    <Link href={`/Profile`}><button className={styles.navbar}>{data && data.fname} {data && data.lname}</button> </Link>
                    <Link href='/'>
                        <button className={styles.navbar} style={{ backgroundColor: "#fd154a", border: "1px solid #f90039 " }}>logout</button>
                    </Link>
                </div>
                <div className={styles.card}>
                    <Image src={data && data.Post1} alt={''} width={720}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src={ data && data.Post2 } alt={''} width={720}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src={data && data.Post3} alt={''} width={720}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src={data && data.Post4} alt={''} width={720}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src={data && data.Post5} alt={''} width={720}
                        height={300}></Image>
                </div>

            </nav>


        </>
    )
}

export default User