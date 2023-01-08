import { useState,useRef } from "react";

const AnnouncementSection = ({att}) => {

return (

<div className="home-announcement-wrapper">
  {att.announcements ?  <>
    <div className="marquee">
        <ul className="announcement-list track">
          {att.announcements.map((acc,index) => (
            <>
            {acc.announcement_title ? 
            <li className={`announcement-item`}>
                <a href={acc.announcement_link} className="announcement-title btn btn-ghost btn-ghost-white" >
                    {acc.announcement_title}
                </a>
            </li>
            : null}
            </>
            ))}
          </ul>
      </div>
  </> : "" }
</div>
)}
export default AnnouncementSection