'use client';
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Page = () => {
 // ...existing code...
const handleSignIn = async () => {
  try {
    // Use default redirect for OAuth (popup may be blocked)
    await authClient.signIn.social({ provider: 'google' });
  } catch (error) {
    console.error('Google sign-in failed:', error);
    alert('Sign-in failed. Please try again.');
  }
};
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href='/'>
        <Image src ="/assets/icons/logo.svg" alt ="logo" width={32} height={32} />
        <h1>SnapCast</h1>
        </Link>

        <div className='description'>
          <section>
            <figure>
              {Array.from({length : 5 }).map((_,index) => (
                <Image src="/assets/icons/star.svg" alt="star" width={20} height={20} key={index} />
              ))}
            </figure>
            <p>
              SnapCast makes screen recording easy. From quick walkthroughs to full presentation , it's fast , smooth , and shareable in seconds
            </p>
            <article>
              <Image src="/assets/images/jason.png" alt='jason' height={64} width={64} className='rounded-full'/>
              <div>
                <h2>
                  Shivam Patel
                </h2>
                <p>Product Designer , NovaByte</p>
              </div>
            </article>
          </section>
        </div>
        <p>SnapCast {(new Date()).getFullYear()}</p>
      </aside>

      <aside className='google-sign-in'>
        <section>
          <Link href="/">
 <Image src ="/assets/icons/logo.svg" alt ="logo" width={40} height={40} />
 <h1>SnapCast</h1>
 </Link>
 <p>Create and share your very first <span>SnapCast Video</span> in no time!</p>
 <button onClick={handleSignIn}>
  <Image src = "/assets/icons/google.svg" alt ="google" height ={22} width ={22} />
  <span>Sign in with Google</span>
 </button>
 </section>
      </aside>
      <div className="overlay"/>
      </main>
  )
}

export default Page