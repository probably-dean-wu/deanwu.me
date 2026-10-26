import { Link } from 'react-router-dom';
import Page from '../components/Page';

const A = ({ href, children }) => <a href={href} target="_blank" rel="noreferrer">{children}</a>;

export default function About() {
  return (
    <Page title="About">
      <h1>About me</h1>
      <p>
        Hello, I'm Dean. I've been studying computer science, making games and building websites since 2022.
        I created this website so I can express my passion for coding, learn ReactJS and (hopefully) inspire
        whoever visits. My open-source projects are always in <Link to="/projects">Projects</Link>, so feel
        free to check them out.
      </p>
      <p>
        This website contains no ads, no sponsorships, no tracking and analytics, no affiliate links, and no
        paywalls.
      </p>
      <p>
        You're always welcome to email me at <a href="mailto:thisisdeanwu@gmail.com">thisisdeanwu@gmail.com</a> and
        say hello. You can also find me on <A href="https://twitter.com/Dean_Wu1">X</A>,{' '}
        <A href="https://github.com/ReversedPhysic">GitHub</A> and{' '}
        <A href="https://www.linkedin.com/in/dean-wu-86ba0b252/">LinkedIn</A>.
      </p>

      <h2>Hardware</h2>

      <h3>Gaming PC</h3>
      <dl className="specs">
        <dt>CPU</dt>
        <dd><A href="https://ark.intel.com/content/www/us/en/ark/products/134599/intel-core-i9-12900k-processor-30m-cache-up-to-5-20-ghz.html">Intel i9-12900K</A></dd>
        <dt>GPU</dt>
        <dd><A href="https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3080-3080ti/">Nvidia RTX 3080 Ti Gigabyte Vision</A></dd>
        <dt>Motherboard</dt>
        <dd><A href="https://rog.asus.com/motherboards/rog-strix/rog-strix-z690-a-gaming-wifi-d4-model/">ASUS ROG Strix Z690-A Gaming WiFi D4</A></dd>
        <dt>Memory</dt>
        <dd><A href="https://www.gskill.com/product/165/299/1597041149/F4-4000C16D-32GTRSA">G.SKILL Trident Z Royal Series 64GB (4 x 16GB)</A></dd>
        <dt>Storage</dt>
        <dd>
          <A href="https://semiconductor.samsung.com/consumer-storage/internal-ssd/980pro/">Samsung 980 PRO 2TB</A> (2x),{' '}
          <A href="https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q?th=1">Seagate BarraCuda 2TB 7200 RPM</A>,
          recycled laptop HDD 1TB, recycled laptop SSD 256GB
        </dd>
        <dt>PSU</dt>
        <dd><A href="https://www.evga.com/products/product.aspx?pn=220-P3-1200-X1">EVGA SuperNOVA P3, 80 Plus Platinum 1200W</A></dd>
        <dt>Case</dt>
        <dd><A href="https://shop.asus.com/us/90dc0013-b48000-tuf-gaming-gt501-white-edition.html">ASUS TUF Gaming GT501 White Edition</A></dd>
      </dl>

      <h3>Keyboard</h3>
      <dl className="specs">
        <dt>PCB</dt>
        <dd><A href="https://wooting.io/wooting-60he">Wooting 60HE</A></dd>
        <dt>Keycaps</dt>
        <dd><A href="https://novelkeys.com/products/gmk-cyl-honor-keycaps">GMK Honor (light)</A></dd>
        <dt>Case</dt>
        <dd><A href="https://kbdfans.com/products/tofu60-redux-case">Tofu60 Redux + brass weight</A></dd>
        <dt>Plate</dt>
        <dd>Aluminum Wooting plate</dd>
        <dt>Mods</dt>
        <dd>Tape mod, O-ring mod, polyfill inside, spacebar tape</dd>
      </dl>

      <h3>Desk</h3>
      <dl className="specs">
        <dt>Keyboard 2</dt>
        <dd><A href="https://www.amazon.com/YUNZII-AL66-Mechanical-Swappable-Pre-lubed/dp/B0CJ97N3J1?th=1">Yunzii AL66 (Blue)</A></dd>
        <dt>Monitor 1</dt>
        <dd><A href="https://www.gigabyte.com/Monitor/M32U">Gigabyte M32U</A></dd>
        <dt>Monitor 2</dt>
        <dd><A href="https://www.msi.com/Monitor/G273CQ">MSI G273CQ</A></dd>
        <dt>Headphones</dt>
        <dd><A href="https://www.amazon.com/Razer-BlackShark-Wireless-Gaming-Headset/dp/B09CLW9K1S">Razer BlackShark V2 Pro Wireless</A></dd>
        <dt>Mouse</dt>
        <dd><A href="https://www.amazon.com/Razer-Ultimate-Lightweight-Wireless-Charging/dp/B09TG6KG2T">Razer Viper Ultimate (Mercury White)</A></dd>
      </dl>

      <h3>On the go</h3>
      <dl className="specs">
        <dt>Tablet</dt>
        <dd>iPad Pro 13-inch (M4) 256GB</dd>
        <dt>Laptop</dt>
        <dd>ROG Zephyrus G15 GA503RM (white), Ryzen 9 6900HS, 3060 Laptop GPU, 40GB RAM (upgraded)</dd>
      </dl>

      <h2>Software</h2>
      <dl className="specs">
        <dt>Coding</dt>
        <dd><A href="https://code.visualstudio.com">Visual Studio Code</A> and <A href="https://gamemaker.io/en">GameMaker Studio 2</A></dd>
        <dt>Notes</dt>
        <dd><A href="https://www.goodnotes.com">Goodnotes</A> and <A href="https://www.onenote.com/download">OneNote</A></dd>
      </dl>

      <p><Link to="/resume">View my resume →</Link></p>
    </Page>
  );
}
