import "./Button.css";

export const Button = (icon, text) => `
<button class="btn-4">
<img src=${icon} alt='${text} icon'/>
<h4>${text}</h4>
</button>
`;