import React from "react";
import ReactPlayer from "react-player";
import "../styles/animationBanner.css";

export default function Home() {
  return (
    <>
      {/* <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="500"
      > */}
      <div className="banner">
        <div className="banner_wrapper">
          <div className="textElem">
            <span className="title">HAPEBEAST</span>
            <span className="text_t">
              8K NEXT-GENERATION, HIGH FASHION HAPES
            </span>
            <span className="text_s">
              Unique, fully 3D and built to unite the ape multiverse.Designed
              and styled by <a href="#">Digimental</a>.
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="info_section">
        <div className="container">
          <div className="text_wrapper">
            <ul>
              <li>
                <span className="title">
                  In the beginning was the word, and the word was -
                </span>
              </li>
              <li>
                <span className="text">
                  A starlit ceremony, two million years ago. Lightning strikes
                  the monolith and the universe fractures. Apes spin off in 10k
                  tribes, distinct but familiar. Every ape is unique. Every ape
                  is beautiful. Every ape is loved, and every ape is family,
                  whatever their differences, wherever they are now.
                </span>
              </li>
              <li>
                <span className="text">
                  Meanwhile, at the heart of the shattered multiverse, the{" "}
                  <span className="bold_text">PRIMAL HAPES</span> wait htmlFor
                  the whole family to return. They wait and they build out their
                  style, they work the Hapewalk, and they plan htmlFor a bigger
                  future.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="video_section">
        {/* <video height="100%" src="./assets/video/file.mp4" autoplay></video> */}
        <ReactPlayer
          url="https://video.wixstatic.com/video/7aa6cb_21bf51ca9ff54e399843757ae3a0903f/1080p/mp4/file.mp4"
          width={"100%"}
          height={"850px"}
          loop={true}
          playing={true}
          muted={true}
        />
      </div>

      <div className="info_section">
        <div className="container">
          <div className="text_wrapper">
            <ul>
              <li>
                <span className="text">
                  <span className="bold_text">HAPEBEAST</span> is a new art and
                  fashion playground from London-based studio Digimental. Built
                  around an initial drop of 8,192 unique NFTs on the Ethereum
                  blockchain, the project unites style, technology and
                  community, and sets up HAPES as next-generation fashion
                  leaders.
                </span>
              </li>
              <li>
                <span className="text">
                  You can find out more about the{" "}
                  <span className="bold_text">HAPEBEAST</span> team below and
                  see the lightest hints htmlFor our post-release plans. As we
                  move closer to launch this site will evolve; like apes at the
                  dawn of a new world we’re making something from nothing, noise
                  from silence. In the beginning was the word. The word was, and
                  is, <span className="bold_text">HAPE</span>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="banner_2"></div>
      <div className="roadmap_section">
        <div className="container">
          <div className="r_wrapper">
            <h2 className="r_w_title">ROADMAP TEASER</h2>
            <div className="cards">
              <div className="card">
                <img src="./assets/img/c1.png" alt="img alt" />
                <h2 className="title">
                  PHASE 1: <br />
                  IN THE BEGINNING
                </h2>
                <ul>
                  <li>A new dimension</li>
                  <li>First drop</li>
                  <li>Music to HAPE to</li>
                </ul>
              </div>
              <div className="card">
                <img src="./assets/img/c2.png" alt="img alt" />
                <h2 className="title">
                  PPHASE 2: <br />
                  THE HAPE MACHINE
                </h2>
                <ul>
                  <li>Second drops</li>
                  <li>Special collections</li>
                  <li>Simian engineering</li>
                </ul>
              </div>
              <div className="card">
                <img src="./assets/img/c3.png" alt="img alt" />
                <h2 className="title">
                  PHASE 3: <br />
                  THE HAPEWALK
                </h2>
                <ul>
                  <li>Clothing collabs</li>
                  <li>HAPE Couture</li>
                  <li>The runway to fame</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="start_project">
        <div className="container">
          <div className="st_wtapper">
            <ul>
              <li>
                <h2>
                  PROTECT YOURSELF AND THE COMMUNITY FROM SCAMMERS. REPORT FAKE
                  COLLECTIONS.
                </h2>
              </li>
              <li>
                <div className="data">
                  <h4>RELEASE DATE:</h4>
                  <h2>JANUARY 2022</h2>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="banner_3"></div>
      <div className="team_section">
        <div className="container">
          <div className="team_wrapper">
            <h2 className="title">MEET THE H~PEBEAST TEAM</h2>
            <div className="t_card">
              <img src="./assets/img/t1.png" alt="img alt" />
              <h2 className="t_title">DIGIMENTAL</h2>
              <h4>PRIMAL HAPE</h4>
              <p>
                Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist
                on the project. Proud member of BAYC.
              </p>
              <div className="icons">
                <a href="#">
                  <img src="./assets/img/icon1.png" alt="img" />
                </a>
                <a href="#">
                  <img src="./assets/img/icon2.png" alt="img" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="teams">
          <div className="ts_card">
            <img src="./assets/img/md1.png" alt="img alt" />
            <h2 className="t_title">TROU</h2>
            <h4>UTILITY</h4>
            <p>
              A game designer and creative director with 20 years’ experience,
              Trou plans the future and scripts the present.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="ts_card">
            <img src="./assets/img/md2.png" alt="img alt" />
            <h2 className="t_title">RICK</h2>
            <h4>SMART CONTRACTS</h4>
            <p>
              Leading Digimental’s interface with the blockchain and securing
              the future of the HAPES. Tech’s back in fashion.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="ts_card">
            <img src="./assets/img/md3.png" alt="img alt" />
            <h2 className="t_title">JUSTCARL</h2>
            <h4>STRATEGY</h4>
            <p>
              Noise & positioning. Want to talk to the HAPEBEAST team about a
              commercial arrangement? Carl’s your point of contact.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="ts_card">
            <img src="./assets/img/md4.png" alt="img alt" />
            <h2 className="t_title">MR.KRIME</h2>
            <h4>MUSIC</h4>
            <p>
              Everything in our world moves to a beat. The ape multiverse is no
              different and Krime has every one of those beats covered.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="ts_card">
            <img src="./assets/img/md5.png" alt="img alt" />
            <h2 className="t_title">STALONE</h2>
            <h4>MOD</h4>
            <p>
              Fifty percent of the power behind the mod team: crafting Discords,
              taking names. Good communities need the best leadership.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
          <div className="ts_card">
            <img src="./assets/img/md6.png" alt="img alt" />
            <h2 className="t_title">CYTRUS</h2>
            <h4>MOD</h4>
            <p>
              The other half of our moderation enforcement squad. Fighting bots
              and taking the battle back to the scammers.
            </p>
            <div className="icons">
              <a href="#">
                <img src="./assets/img/icon1.png" alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="moderetion_team">
        <div className="head">
          <img src="./assets/img/mt1.png" alt="img" />
          <h2>THE MODERATION TEAM</h2>
        </div>
        <div className="mt_items">
          <div className="mt_item">
            <h2>NG</h2>
            <h4>HEAD MOD & CHINESE MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>RIDOO</h2>
            <h4>INDONESIAN MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>TOBI</h2>
            <h4>PHILIPPINES MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>MARTBIEMANS</h2>
            <h4>VC MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>MIKEY G</h2>
            <h4>US MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>KUROMI</h2>
            <h4>CHINESE MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>CRISTIAN</h2>
            <h4>US MODERATOR</h4>
          </div>
          <div className="mt_item">
            <h2>SOLID</h2>
            <h4>RUSSIAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>ITSMEFEYZAA</h2>
            <h4>TURKISH MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>HOTMESSMELLOW</h2>
            <h4>INDIAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>THEGOAT</h2>
            <h4>NEW ZEALAND MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>YIN</h2>
            <h4>CHINESE MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>DONA</h2>
            <h4>SPANISH MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>NITO03</h2>
            <h4>FRENCH MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>FLOOB</h2>
            <h4>JAPANESE MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>HEAL</h2>
            <h4>WELLNESS MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>YUMYUM</h2>
            <h4>KOREAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>MITO</h2>
            <h4>ARABIC MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>CROSSEDEYESPANDA</h2>
            <h4>RUSSIAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>MICROGLIA</h2>
            <h4>FEEDBACK MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>NFTPRADA</h2>
            <h4>GENERAL MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>TOUNSIHEAT</h2>
            <h4>VC MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>SMAT</h2>
            <h4>INDIAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>BURNT</h2>
            <h4>GENERAL MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>FOXY</h2>
            <h4>HAPE FASHION MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>NAM88</h2>
            <h4>LGBTQ+ MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>BARD</h2>
            <h4>GENERAL MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>SIMI</h2>
            <h4>ITALIAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>SNIFFLESX</h2>
            <h4>UK MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>LEGEND</h2>
            <h4>TURKISH MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>VINNY</h2>
            <h4>GERMAN MODERATOR </h4>
          </div>
          <div className="mt_item">
            <h2>MOJITO</h2>
            <h4>HEAD MODERATOR </h4>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer_wrapper">
            <div className="f_main">
              <div className="box1">
                <h2>
                  CURIOUS? <br />
                  GET IN TOUCH
                </h2>
                <h4>
                  We can't promise a reply but we'd love to hear <br /> your
                  thoughts.
                </h4>
              </div>
              <div className="box2">
                <div className="icons_f">
                  <h4>FOLLOW US</h4>
                  <div className="ic_img">
                    <a href="#">
                      <img src="./assets/img/ic1.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="./assets/img/ic2.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="./assets/img/ic3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="contacts">
                  <h4>CONTACT US</h4>
                  <a href="mailto:contact@hapebeast.com">
                    contact@hapebeast.com
                  </a>
                </div>
              </div>
            </div>

            <p>© 2022 HAPEBEAST. Apedemption Genesis. Apes forever.</p>
          </div>
        </div>
      </div>
    </>
  );
}
