import React from 'react'
import styles from '../styles/modal.module.css'
import Image from 'next/image'
import { useEffect } from 'react';
import { useState } from 'react';
import {useRouter} from 'next/router';

export default function modal() {
    const [data,setdata]=useState();
    const router = useRouter();
    useEffect(()=>{
       
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/user?slug=${slug}`)
        .then((res)=>{return res.json()})
        .then((data)=>setdata(data))
        
    },[router.isReady])
    return (

        <div className={styles.modal}>
            <h2 className={styles.h2}>Profile</h2>
            <div className={styles.Image}>
                <Image src='/1.png' alt={''} width={180} height={180}></Image>
            </div>
            <div className={styles.detail}>
                <div><strong>UserName:</strong></div>
                <span>Karn Cal</span>
            </div>
            <div className={styles.detail}>
                <div><strong>Email:</strong></div>
                <span>karn.yong@melivecode.com</span>
            </div>
            <div className={styles.card}>
                    <Image src='/nature1.jpg' alt={''} width={500}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src="/nature2.png" alt={''} width={500}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src="/nature3.png" alt={''} width={500}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src="/nature4.jfif" alt={''} width={500}
                        height={300}></Image>
                </div>
                <div className={styles.card}>
                    <Image src="/nature5.jpg" alt={''} width={500}
                        height={300}></Image>
                </div>

        
        </div>
    )

}
