import { attributes, html } from '../../content/navigation/footer.md'

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer_row1">
        <div className="social-links">
          <h4 className="footer-heading">Follow ABBS:</h4>
          {attributes.social_links.map(((link,id) => 
            <>{link.show !== false ? <a key={id} className="footer-link" href={link.links_loc ? link.links_loc : "#"}>{link.links_label}</a> : "" } <div className="delim">|</div></>
          ))}
        </div>
        <div className="whatsapp">
          <h4 className="footer-heading">WhatsApp us now:</h4>
          <a target="_blank" href={"https://wa.me/"+attributes.contact_info.whatsapp_number.replace("+","").replace(" ","")} className="footer-link">{attributes.contact_info.whatsapp_number}</a>
        </div>
        <div className="email">
          <h4 className="footer-heading">Send us a message</h4>
          <a href={"mailto:"+attributes.contact_info.contact_email} className="footer-link">{attributes.contact_info.contact_email}</a>
        </div>
      </div>
      <div className="footer_row2">
        {attributes.columns.map((col,id)=> (
          <div key={id} className="footer-links-col" id={col.col_id}>
              <h4 className="footer-heading footer-links-heading w-inline-block">{col.col_title}</h4>
              <div className="column-links">
                {col.links_list.map(((link) => 
            <>{link.show !== false ? <a key={id} className="footer-col-link" href={link.links_loc ? link.links_loc : "#"}>{link.links_label}</a> : "" }</>
              ))}
              </div>
          </div>
        ))}
        <div className="address-block">
            <img src={"../"+attributes.logo} layout="responsive" loading="lazy" width="120" alt="" className="footer-logo"/>
          <p className="paragraph-2">{attributes.contact_info.address}</p>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Ph no :</h4>
            <a href={"tel:"+attributes.contact_info.contact_number} className="footer-link">{attributes.contact_info.contact_number}</a>
          </div>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Admissions</h4>
            <a href={"tel:"+attributes.contact_info.admissions_number} className="footer-link">{attributes.contact_info.admissions_number}</a>
          </div>
          <div className="address-contact-links">
            <h4 className="footer-address-heading">Email:</h4>
            <a href={"mailto:"+attributes.contact_info.admissions_email} className="footer-link">{attributes.contact_info.admissions_email}</a>
          </div>
        </div>
      </div>
      <div className="footer_row3">
        <div className="social-links">
          <div className="copyright">{attributes.footer_copyright}</div>
          {attributes.footer_links.map(((link,id) => 
            <><div className="delim">|</div>{link.show !== false ? <a key={id} className="footer-link" href={link.links_loc ? link.links_loc : "#"}>{link.links_label}</a> : "" }</>
          ))}
        </div>
      </div>
    </div>
  </>
)

export default Footer
