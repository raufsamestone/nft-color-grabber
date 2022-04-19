import Head from "next/head";
import styles from "../styles/Home.module.css";
import useImageColor from "use-image-color";
import { useState } from "react";

function Home() {
  const defaultImage =
    "https://rarible.mypinata.cloud/ipfs/QmPhQVCGcLYXYx7ZCgHjM6hwasC9Z4g2wn51wQ6ccuVF29/image.png";

  const [imageURL, setImageURL] = useState(defaultImage);

  const { colors } = useImageColor(imageURL, { cors: true, colors: 10 });

  const imageUploader = (e) => {
    const value = e.target.value;
    setImageURL(value);
  };

  const title = "NFT Color Grabber 🎨";
  const description = 'Paste any NFT or image URL and get color density.';
  const webURL = "https://raufsamestone.com";

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="/public/demo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        <input onChange={imageUploader} placeholder="Paste your image URL" />
        <span>Paste any NFT or image URL.</span>
        {imageURL && <img src={imageURL} width="500" height="500" />}
        <div className="colors">
          {colors &&
            colors.map((color) => (
              <div key={color}>
                <div
                  style={{
                    background: color,
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                ></div>
                <span>{color}</span>
              </div>
            ))}
        </div>
      </main>
      <span className={styles.footer}>
        <a target="_blank" without rel="noreferrer" href={webURL + "?ref=image-grabber"}>
          {" "}
          raufsamestone
        </a>
      </span>
    </div>
  );
}

export default Home;
