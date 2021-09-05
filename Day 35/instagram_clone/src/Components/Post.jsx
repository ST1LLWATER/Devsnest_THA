function Post(props) {
  return (
    <>
      <article className="post">
        <header className="post_header">
          <img
            src="https://cdn.discordapp.com/attachments/862761189422923816/883707399360372786/238618637_1685784031811314_3750808175158068979_n.png"
            alt="dp"
            className="post_pfp"
          />
          <div className="titles">
            <div className="post_title">Avneet Kaur</div>
            <div className="post_secTitle">Bastian Restro And Bar</div>
          </div>
          <button className="header_more">
            <svg
              aria-label="More options"
              class="_8-yf5 "
              fill="#262626"
              height="16"
              role="img"
              viewBox="0 0 48 48"
              width="16"
            >
              <circle
                clip-rule="evenodd"
                cx="8"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="24"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="40"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </button>
        </header>
        <div className="post_image">
          <img
            src="https://images-ext-1.discordapp.net/external/UhR-eI8ixd34wLW_deaZiIVbrLgKt4uSrPyAR1h5DSo/%3F_nc_ht%3Dscontent-bom1-1.cdninstagram.com%26_nc_cat%3D1%26_nc_ohc%3DGCGNM1QdX3oAX8yzgwC%26edm%3DAP_V10EBAAAA%26ccb%3D7-4%26oh%3D500cee26dcbe64248906ac0c1a929a44%26oe%3D61398327%26_nc_sid%3D4f375e/https/scontent-bom1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/240782551_166606778927692_5961847006583894680_n.jpg"
            alt="post"
          />
        </div>
      </article>
    </>
  );
}

export default Post;
