import Image from "next/image";
import Link from "next/link";


import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser()

  return (
    // <nav className='flexBetween navbar'>
    //   <div className='flex-1 flexStart gap-10'>
    //     <Link href='/'>
    //       <Image
    //         src='/logo.svg'
    //         width={116}
    //         height={43}
    //         alt='logo'
    //       />
    //     </Link>
    //     <ul className='xl:flex hidden text-small gap-7'>
    //       {NavLinks.map((link) => (
            
    //         <Link href={link.href} key={link.text} className="text-black hover:text-purple-500 focus:text-purple-300"> 
    //           {link.text}
    //         </Link>
    //       ))}
    //     </ul>
    //   </div>

    //   <div className='flexCenter gap-4'>
    //     {session?.user ? (
    //       <>
    //         <ProfileMenu session={session} />

    //         <Link href="/create-project">
    //           <Button title='Share work' />
    //         </Link>
    //       </>
    //     ) : (
    //       <AuthProviders />
    //     )}
    //   </div>



    // </nav>
 <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
  <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-1 py-4">
    <div className="relative flex items-center">
      <a href="/">
      <Image src="/logoSS.svg" loading="lazy" style={{color: 'transparent'}} width={50} height={45}/>
        


        {/* <img src="https://www.svgrepo.com/show/499831/target.svg" loading="lazy" style={{color: 'transparent'}} width={32} height={32} /> */}
      </a>
      {/* <div className="font-bold  hover:text-primary-purple">Skillsync</div> */}
      <Image src="/logo-purple.svg" loading="lazy" style={{color: 'transparent'}} width={80} height={80}/>

    </div>
    <ul className="hidden items-center justify-center gap-6 md:flex">
      <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
      <ul className='hidden items-center justify-center gap-6 md:flex'>
          {NavLinks.map((link) => (
            
            <Link href={link.href} key={link.text} className="text-black hover:text-purple-500 focus:text-purple-300"> 
              {link.text}
            </Link>
          ))}
        </ul>
      </li>

    </ul>


    <div className="flex-grow" />
    <div className="hidden items-center justify-center gap-6 md:flex">
    <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <Button title='Share work'/>
            
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>

    </div>
    <div className="relative flex items-center justify-center md:hidden">
      <button type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto text-slate-900"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
      </button>
    </div>
    
  </nav>
</header> 














  );
};

export default Navbar;