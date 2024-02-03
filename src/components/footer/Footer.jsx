import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "24px",
        borderTop: "1px solid #c7c7c7",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "14px",
        }}
      >
        <p style={{ fontWeight: 500 }}>Terms of Service</p>
        <p style={{ fontWeight: 500 }}>Privacy Policy</p>
        <p style={{ fontWeight: 500 }}>Privacy Policy</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <p style={{ fontWeight: 500 }}>
          &copy; All rights reserved by Zelf. 2022
        </p>
        <p style={{ fontWeight: 500 }}>
          <img
            src="https://w7.pngwing.com/pngs/998/289/png-transparent-instagram-icon-logo-grayscale-graphic-designer-instagram-customer-service-miscellaneous-angle-gdragon.png"
            width={24}
            height={14}
          />
        </p>
        <p style={{ fontWeight: 500 }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/741/218/non_2x/tiktok-logo-icon-social-media-icon-free-png.png"
            width={14}
            height={14}
          />
        </p>
        <p style={{ fontWeight: 500 }}>
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-gris.png"
            width={14}
            height={14}
          />
        </p>
      </div>
    </div>
  );
}
