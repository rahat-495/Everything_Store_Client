
"use client" ;
import { usePathname } from "next/navigation";

const Footer = () => {

    const location = usePathname() ;

    if(location === "/signup" || location === "/login") return null ;

    return (
        <div className="pl-48 bg-base-200">
            
            <footer className="footer sm:footer-horizontal text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="username@site.com"
                        className="input input-bordered focus:border-none focus:outline-none join-item" />
                        <button type="button" className="btn btn-primary shadow-none bg-[#9ed11c] border-[#9ed11c] text-black font-semibold nata">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>

        </div>
    );
};

export default Footer;
