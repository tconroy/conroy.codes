import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's a list of the tech I use day to day.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Uses</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        {metadata.description}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3>Hardware & Office</h3>
        <ul>
          <li>16&quot; Macbook Pro M1 Max (2021)</li>
          <li>34&quot; Alienware AW3418DW</li>
          <li>Logitech G Pro X Superlight</li>
          <li>Wooting 60HE Keyboard</li>
          <li>Ikea Bekant standing desk</li>
          <li>Steelcase leap v2 chair</li>
        </ul>
        <h3>Development</h3>
        <ul>
          <li>Editor: VSCode</li>
          <li>Theme: GitHub Dark</li>
          <li>Terminal: iTerm 2 + zsh</li>
          <li>
            <a href="https://github.com/tconroy/dotfiles">custom dotfiles</a>
          </li>
          <li>ColorSlurp</li>
          <li>Figma</li>
          <li>Insomnia</li>
          <li>PixelSnap 2</li>
        </ul>
        <h3>Audio / Video</h3>
        <ul>
          <li>Fujifilm XT3 (35mm f1.8)</li>
          <li>Shure SM7B</li>
          <li>Sennheiser HD6xx Headphones</li>
          <li>Audient EVO 4 audio interface</li>
          <li>Elgato Camlink</li>
          <li>Elgato Key Light (x2)</li>
        </ul>
        <h3>Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>CleanShot X</li>
          <li>Affinity Suite (Designer, Photo, Publisher)</li>
          <li>Alfred 5</li>
          <li>Chrome</li>
          <li>Bear</li>
          <li>Contexts (macOS)</li>
          <li>Hyperkey</li>
          <li>Irvue</li>
          <li>Keka</li>
          <li>Maestral</li>
          <li>Magnet</li>
          <li>NightEye</li>
          <li>Spark</li>
          <li>Things</li>
        </ul>
      </div>
    </section>
  );
}
