import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

const Idag = () => {
  return (
    <div className='m-5 w-2/3 lg:w-1/2'>
        
        <p className='font-bold text-xl'>Idag:</p>

        <div className='flex items-center gap-x-4 mt-2'>
            <p>Salg: <span className='font-semibold'>426,00 kr.</span></p>
            <p>Afvist: <span className='font-semibold'>0,00 kr.</span></p>
        </div>

        <div className="flex w-full flex-col mt-5">
            <Tabs aria-label="Options">
                <Tab key="Bestillinger" title="Bestillinger">
                <Card>
                    <CardBody>
                        <div>
                            <div className='flex justify-between items-center border-b pb-2 mb-3'>
                                <p className='bg-gray-200 p-2 rounded-md'>#212</p>
                                <div className='flex items-center justify-between gap-x-4'>
                                    <p className='font-semibold'>Louise K.</p>
                                    <p>13/02-2023</p>
                                    <p>13.05</p>
                                </div>
                                <div>
                                    <p>145 Kr.</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center border-b pb-2 mb-3'>
                                <p className='bg-gray-200 p-2 rounded-md'>#212</p>
                                <div className='flex items-center justify-between gap-x-4'>
                                    <p className='font-semibold'>Louise K.</p>
                                    <p>13/02-2023</p>
                                    <p>13.05</p>
                                </div>
                                <div>
                                    <p>145 Kr.</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='bg-gray-200 p-2 rounded-md'>#212</p>
                                <div className='flex items-center justify-between gap-x-4'>
                                    <p className='font-semibold'>Louise K.</p>
                                    <p>13/02-2023</p>
                                    <p>13.05</p>
                                </div>
                                <div>
                                    <p>145 Kr.</p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>  
                </Tab>
                <Tab key="Varer" title="Varer">
                <Card>
                    <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                </Card>  
                </Tab>
            </Tabs>
        </div> 

    </div>
  )
}

export default Idag