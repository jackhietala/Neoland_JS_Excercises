import "./Footer.css";
import { Button } from "../Button/button";

export const Footer = () => `
<h2>Contact me!</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/telegram.png", "Telegram")}
${Button("/icons/linkedin.png", "LinkedIn")}
</div>

`;
