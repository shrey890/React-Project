import hero from '../../public/Service 24_7-pana 1.svg'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Button from './button/Button';
// import message from 'https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
function ContactForm() {

    return (
        <div className="md:grid flex  md:grid-cols-2">
            <div className="md:col-span-6">
                <div className='flex gap-14 mt-20'>
                    <Button text={ 'VIA SUPPORT CHAT' } iconX={ <MdMessage fontSize='24px' /> } />
                    <Button text={ 'VIA CALL' } iconX={ <IoMdCall fontSize='24px' /> } />
                    <div>
                        <Button text={ 'VIA EMAIL FORM' } iconX={ <MdEmail fontSize='24px' /> } />
                    </div>
                </div>
                <div className='mt-14 '>
                    <div className='h-10 w-96   '>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className='h-10 w-96   '>
                        <label htmlFor="email">E-mail</label>
                        <input type="email"  placeholder='Email' />
                    </div>
                    <div className='  '>
                        <label className='flex ' htmlFor="Text">Text</label>
                        <textarea name="" id="" cols="29" rows="5"></textarea>
                    </div>
                    <div className='flex justify-end w-56 mt-5  '>
                        <Button  text={ 'Submit' } />
                    </div>
                </div>
            </div>  
            <div className="md:col-span-6 fl     w-2/3 flex">
                <img src={ hero }  alt="hero" className="w-full h-auto" />
            </div>
        </div>
    )
}
export default ContactForm