//Ux ui
import iconUx from "../../assets/img/icons/technologies/UX.svg"
import iconUi from "../../assets/img/icons/technologies/UI.svg"
//material
import iconMatDes from "../../assets/img/icons/technologies/material-design.svg"
//android
import iconAndroid from "../../assets/img/icons/technologies/android.svg"
//figma
import iconFigma from "../../assets/img/icons/technologies/Figma.svg"
import iconFigmalLg from "../../assets/img/technologies/figma.svg";
//html
import iconHtml from "../../assets/img/icons/technologies/HTML.svg";
import iconHtmlLg from "../../assets/img/technologies/html.svg";
//css
import iconCss from "../../assets/img/icons/technologies/css.svg";
import iconCssLg from "../../assets/img/technologies/css.svg";
// Sass
import iconSass from "../../assets/img/icons/technologies/SASS.svg";
import iconSassLg from "../../assets/img/technologies/sass.svg";
// GSAP
import iconGsap from "../../assets/img/icons/technologies/GSAP.svg";
// Bootstrap
import iconBtp from "../../assets/img/icons/technologies/bootstrap.svg";
import iconBtpLg from "../../assets/img/technologies/bootstrap.svg";
// Tailwind
import iconTwd from "../../assets/img/icons/technologies/tailwindcss.svg";
import iconTwdLg from "../../assets/img/technologies/tailwindcss.svg";
// JavaScript
import iconJs from "../../assets/img/icons/technologies/JavaScript.svg";
import iconJsLg from "../../assets/img/technologies/javascript-js.svg";
// React
import iconReact from "../../assets/img/icons/technologies/react.svg";
import iconReactLg from "../../assets/img/technologies/react.svg";
// Vue
import iconVue from "../../assets/img/icons/technologies/vue.svg";
import iconVueLg from "../../assets/img/technologies/vue.svg";
// Wordpress
import iconWp from "../../assets/img/icons/technologies/wordpress.svg";
import iconWpLg from "../../assets/img/technologies/wordpress.svg";

// Objeto de iconos con versiones normal y "lg"
const icons = {
  ux:{ sm: iconUx  },
  ui:{ sm: iconUi },
  materialD:{ sm: iconMatDes},
  android:{sm:iconAndroid},
  figma: { sm: iconFigma, lg: iconFigmalLg },
  html: { sm: iconHtml, lg: iconHtmlLg },
  css : {sm: iconCss, lg: iconCssLg},
  sass: { sm: iconSass, lg: iconSassLg },
  gsap: { sm: iconGsap }, // Si no hay versión "lg", puedes dejar solo "sm"
  bootstrap: { sm: iconBtp, lg: iconBtpLg },
  tailwind: { sm: iconTwd, lg: iconTwdLg },
  js: { sm: iconJs, lg: iconJsLg },
  react: { sm: iconReact, lg: iconReactLg },
  vue: { sm: iconVue, lg: iconVueLg },
  wp: { sm: iconWp, lg: iconWpLg }
};

function IconTechnology({ technology = 'html', size = 'sm', type='' }) {
  const iconSet = icons[technology] || {};
  const icon = iconSet[size] || iconSet['sm']; // Si no existe la versión del tamaño, usa 'sm'
  const iconClass = `icon ${size} ${type==='text' ? 'text' : '' } ${technology==='ux' || technology==='ui'? 'design' :''} ${technology==='materialD' ? 'design' :''}`;
  
  return (
    <div className={iconClass}>
      <img src={icon} alt={technology} />
    </div>
  );
}

export default IconTechnology;
