import React, { use } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaPagelines, FaYoutube } from 'react-icons/fa6';
import { AuthContext } from '../../AuthComtext_provider/AuthContext';

const Footer = () => {
    const { theme } = use(AuthContext)
    return (
        <div>
            <footer className={`${theme ? 'bg-gray-800 text-white' : 'bg-gray-200'} footer sm:footer-horizontal  h-full text-base-content p-10`}>
                <aside>
                    <div className='text-6xl text-[green]'><FaPagelines></FaPagelines></div>
                    <p className='optionalText text-[green] text-xl'>
                        Green Gardening
                    </p>
                    <p> A Gardening Tips and share platform</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#179e17]">Services</h6>
                    <a className="link link-hover">Find you Tips</a>
                    <a className="link link-hover">Solutions</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-[#179e17]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#179e17]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className=''>
                    <h6 className="footer-title text-[#179e17]">Social</h6>
                    <div className='flex gap-5'>
                        <a href='https://www.youtube.com/@misf-official' className="link link-hover text-[24px] text-[red]"><FaYoutube></FaYoutube></a>
                        <a href='https://www.linkedin.com/in/muksitulislams/' className="link link-hover text-[24px] text-[blue]"><FaLinkedinIn></FaLinkedinIn></a>
                        <a href='https://github.com/MISFOfficial' className={`link link-hover text-[24px] ${theme ? 'text-white' : ' text-[black]'}`}><FaGithub></FaGithub></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;