import React from "react";
import { ShowMore } from "@re-dev/react-truncate";

export default function Hospitality() {
  return (
    <div className="conatiner-dining">
      <div id="appreciation">
        <span>Lords Hotels & Resorts</span>
        <h2>Hospitality with Heart – Atithi Devo Bhavah</h2>
        
          <ShowMore lines={10}>
            Lords Hotels & Resorts is a rapidly growing hospitality chain
            operating across India and Nepal, dedicated to delivering
            unparalleled hospitality. Guided by the timeless Indian principle of
            'Atithi Devo Bhavah' (The guest is God), we transform ordinary stays
            into extraordinary experiences. Blending modern amenities with rich
            cultural heritage, we ensure personalised and memorable service for
            every guest. Whether travelling for business or leisure, Lords
            Hotels & Resorts promises an exceptional stay. We take pride in
            being part of the best hotels and resorts in India and Nepal,
            upholding our commitment to excellence and authentic hospitality.
          </ShowMore>
        
      </div>
    </div>
  );
}
