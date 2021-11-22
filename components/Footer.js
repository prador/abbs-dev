import Link from 'next/link'
import Image from 'next/image'
import Logo from '/assets/img/00-abbs-logo-black.svg'

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer_row1">
        <div id="w-node-_560a7102-ab79-a40b-a8d7-fbe3be7a1035-fe48c5ce" className="social-links">
          <h4 className="footer-heading">Follow ABBS:</h4>
          <a href="#" className="footer-link">Twitter</a>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Instagram</a>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Facebook</a>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Youtube</a>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Linkedin</a>
        </div>
        <div id="w-node-d786f979-6350-7f58-705d-28ad5c27c90c-fe48c5ce" className="whatsapp">
          <h4 className="footer-heading">WhatsApp us now:</h4>
          <a href="#" className="footer-link">+91 9141707070</a>
        </div>
        <div id="w-node-b911bf0e-0cc4-540d-7d52-12efe5f13390-fe48c5ce" className="email">
          <h4 className="footer-heading">Send us a message</h4>
          <a href="#" className="footer-link">contact@abbs.edu.in</a>
        </div>
      </div>
      <div className="footer_row2">
        <div id="w-node-_92c65d76-5590-d926-26ab-c5b0f05cec42-fe48c5ce" className="footer-links-col">
          <a href="#" className="footer-links-heading w-inline-block">
            <h4 className="footer-heading">Programs</h4>
          </a>
          <a href="#" className="footer-col-link">Management</a>
          <a href="#" className="footer-col-link">Life Sciences</a>
          <a href="#" className="footer-col-link">Commerce</a>
          <a href="#" className="footer-col-link">Liberal Arts</a>
          <a href="#" className="footer-col-link">Information Technology</a>
        </div>
        <div id="w-node-_5af67542-01e4-6793-4c96-c029399483cf-fe48c5ce" className="footer-links-col">
          <a href="#" className="footer-links-heading w-inline-block">
            <h4 className="footer-heading">Quick Links</h4>
          </a>
          <a href="#" className="footer-col-link">Faculty</a>
          <a href="#" className="footer-col-link">Research</a>
          <a href="#" className="footer-col-link">Corporate</a>
          <a href="#" className="footer-col-link">Campus Life</a>
          <a href="#" className="footer-col-link">Admissions</a>
        </div>
        <div id="w-node-_5d3661d3-f311-edc5-b3f8-a9f1ff2d72c2-fe48c5ce" className="footer-links-col double">
          <a href="#" className="footer-links-heading w-inline-block">
            <h4 className="footer-heading">Useful Links</h4>
          </a>
          <a href="#" className="footer-col-link">Employee Login</a>
          <a href="#" className="footer-col-link">Career @ ABBS</a>
          <a href="#" className="footer-col-link">News</a>
          <a href="#" className="footer-col-link">Events</a>
          <a href="#" className="footer-col-link">FAQs</a>
          <div className="div-block-6"></div>
          <a href="#" className="footer-col-link">Code of Conduct</a>
          <a href="#" className="footer-col-link">Grievance Redressal</a>
          <a href="#" className="footer-col-link">Mandatory Disclosures</a>
        </div>
        <div id="w-node-aa5f47a9-f77e-2ab4-c93e-cef8997f2a91-fe48c5ce" className="address-block">
            <Image src={Logo} layout="responsive" loading="lazy" width="100" alt="" className="image-10"/>
          <p className="paragraph-2">Acharya Bangalore B-School<br/>Andrahalli Main Road, Off Magadi Road,<br/>Bengaluru – 560 091, Karnataka, India</p>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Ph no :</h4>
            <a href="#" className="footer-link">+91 80 23245515</a>
          </div>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Admissions</h4>
            <a href="#" className="footer-link">+91 9141707070</a>
          </div>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Email:</h4>
            <a href="#" className="footer-link">admissions@abbs.edu.in</a>
          </div>
        </div>
      </div>
      <div className="footer_row3">
        <div className="social-links">
          <div className="copyright">© Acharya Bangalore B-School. All rights reserved.</div>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Terms and Conditions</a>
          <div className="delim">|</div>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>
      </div>
    </div>
  </>
)

export default Footer
