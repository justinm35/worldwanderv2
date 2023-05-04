'use client'
import { Dispatch, FC, useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
  GlobeAmericasIcon,
  HomeIcon,
  MapPinIcon,
  FireIcon,
  PlusCircleIcon,
  BellIcon
  
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import WWLogo from '/public/WW-LOGO-GRAY.png'
import Image from 'next/image'
import Link from 'next/link'
import { getSession, signOut, useSession } from 'next-auth/react'
import { Sling as Hamburger } from 'hamburger-react'
import { Session } from 'next-auth'
import SignoutButton from './SignoutButton'

const products = [
  { name: 'Home', description: 'See what\'s new with explorers around the world', href: '/dashboard', icon: HomeIcon },
  { name: 'My Wanders', description: 'Globe display of all of your adventures', href: '/dashboard/protected', icon: GlobeAmericasIcon },
  { name: 'Cool Destinations', description: 'Find some cool destinations other Wanderer\'s have found', href: '#', icon: MapPinIcon },
  { name: 'Cafe Finder', description: 'Find good cafes and workplaces in your city', href: '#', icon: FireIcon },
]
const callsToAction = [
  { name: 'Add New Wander', href: '#', icon: PlusCircleIcon},
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
]


function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}
interface NavbarProps {
  session : Session | null
}

const Navbar:  FC<NavbarProps> = ({session}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="relative">
          <nav className="mx-auto flex max-w-8xl items-center justify-between p-4 lg:px-4 fixed w-full" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">World Wander</span>
      
                  <Image className="h-12 w-auto" src={WWLogo} alt="World Wander Logo" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            
            <div className="hidden lg:flex  lg:justify-end">
            <Popover.Group className="hidden lg:flex lg:gap-x-2 items-center">
              <Popover className="relative">
              {({ open }: {open: any}) => (
                <>
                  <Popover.Button  className="flex items-center ring-0 border-0 border-none active:border-0 shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] h-full p-1.5 rounded-[8px] bg-white active:shadow-[rgb(204,219,232)_3px_3px_6px_0px_inset,_rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset]">
                  <Hamburger toggled={open} size={20}/>
                  </Popover.Button>

                  <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  >
                  <Popover.Panel className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </Link>
                      ))}
                      <SignoutButton/>
                    </div>
                  </Popover.Panel>
                  </Transition>
                  </>
              )}
              </Popover>
    
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Features
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                My Wanders
              </a> */}
            </Popover.Group>


            <div className='ml-4 w-full h-full shadow-[rgba(0,0,0,0.12)_0px_1px_3px,rgba(0,0,0,0.24)_0px_1px_2px] flex items-center justify-center rounded-[8px] bg-white active:shadow-[rgb(204,219,232)_3px_3px_6px_0px_inset,_rgba(255,255,255,0.5)_-3px_-3px_6px_1px_inset]'>
            {session ? 
            <Menu>
            <div className='relative p-0.5'>
            <Menu.Button>
              <div className='max-w-full max-h-full p-1.5 items-center flex'>
                <div className='relative h-11 w-11 mr-2.5'>
                  <Image src={session.user.image} fill alt={`${session?.user?.name} Profile Picture`} className='rounded-md'/>
                  </div>
                  <div className='w-32 mr-1 text-left'>
                    <p className='font-bold text-gray-900 text-sm'>{session?.user?.name}</p>
                    <div className='font-normal text-gray-400 text-[12px] flex flex-row '><p className='truncate'>{session?.user?.email?.split('@')[0]}</p><p>{session?.user?.email?.split('@')[1]}</p></div>
                   </div>
                  <ChevronDownIcon className="h-6 w-6 text-gray-500 mx-2 transition hover:text-gray-700 hover:scale-110 active:translate-y-1" aria-hidden="true" />
              </div>
            </Menu.Button>
            <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
            >
            <Menu.Items className="absolute right-0 top-full z-10 mt-3 max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 flex flex-col">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="opacity-75">Invite a friend (coming soon!)</span>
              </Menu.Item>
            </div>
            </Menu.Items>
            </Transition>
            </div>
          </Menu>
            : 
            <div className='w-full h-full p-2 px-4 flex items-center'>
            <UserCircleIcon className="h-6 w-6 mr-1.5 text-gray-900"/>
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900"> Log in <span aria-hidden="true">&rarr;</span> </Link>
            </div>}
            </div> 
          

          </div>
          </nav>

          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">World Wander</span>
                  <Image className="h-12 w-auto" src={WWLogo} alt="World Wander Logo" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Log in
                    </a>

                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      )
}

export default Navbar