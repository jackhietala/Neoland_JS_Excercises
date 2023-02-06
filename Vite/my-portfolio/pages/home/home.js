import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";


export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>

    <p class="typewriter">Hey, I'm</p>
    <h1 >Jack</h1>
    <h2>Aliquando et insanire iucundum est</h2>
    <h3 class="typewriter">Sometimes is enjoyable to be insane</quote> - Seneca, De tranquillitate animi XVII 10</h3>

    <p class="line-1 anim-typewriter">Animation typewriter style using css steps()</p>

    <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>


      <a href="mailto:peterparker@gmail.com">Say hi →</a>
    </section>`;
};


// function([string1, string2],target id,[color1,color2])    
