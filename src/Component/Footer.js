import React from 'react'

export default function Footer(props) {
  return (
    <>
      <div className="containers">
        <div className="titelName">
          <img src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/420438072_1402038794045424_2519078378954821296_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFYVmzATp0kdQBfjpMcfAR0KKyJoH9rhngorImgf2uGeHivPfFqYj8feGXDsTZ4fyZADBRj6rNAZAPDBU68dut6&_nc_ohc=iFI0xQ5aZsIAX_nu4Uc&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfBfyMWcNj29Yu0PbjpLRHmXiwl3x9DVVMXRPHM9qJVhRw&oe=65CB9957" alt="" />
          <p>{props.name}</p>
        </div>

        <div className="footer">
          <p>Copyright © 2024 @Mohit_Mahmud</p>
        </div>

        <div className="network">
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}

        </div>
      </div>
    </>
  )
}
