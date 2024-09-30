/** @format */

import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="p-2 text-justify space-y-4 mb-8">
      <Fade direction="down" triggerOnce={true} duration={1000}><h1 className="font-semibold text-xl">Introduction of Canvas</h1></Fade>
      <Fade direction="right" triggerOnce={true} delay={1300} >
      <p className="opacity-85">
        Canvas is an extremely durable plain-woven fabric used for making sails, tents, marquees, backpacks, shelters, as a support for oil painting
        and for other items for which sturdiness is required, as well as in such fashion objects as handbags, electronic device cases, and shoes.
      </p>
      </Fade>
      <Fade direction="down" triggerOnce={true} delay={1500}><h1 className="font-semibold text-xl mt-4">History of Canvas</h1></Fade>
      <Fade direction="left" triggerOnce={true} delay={2000}> <p className="opacity-85">
        The use of canvas dates back to ancient times, where it was made from various materials such as linen, hemp, and even animal skins. These
        early canvases were primarily used for sails, tents, and other practical purposes. During the Middle Ages, canvas began to be used as a
        surface for painting, especially in Europe. Artists would stretch canvas over wooden panels or frames to create portable and lightweight
        surfaces for their artwork. Renaissance: Canvas became increasingly popular among artists during the Renaissance period. Its smooth surface
        allowed for more detailed and intricate paintings compared to traditional surfaces like wood or plaster. Artists such as Leonardo da Vinci and
        Michelangelo utilized canvas for their masterpieces. Canvas became the preferred painting surface for many artists during the 16th and 17th
        centuries. The invention of oil paint made canvas even more suitable, as it allowed for richer colors and finer details. The flexibility and
        durability of canvas also made it ideal for large-scale paintings.
      </p></Fade>
     <Fade  direction="right" triggerOnce={true} delay={2500}> <p className="opacity-85">
        Canvas continued to be widely used by artists throughout the 18th and 19th centuries. The Industrial Revolution led to advancements in canvas
        production, with factories producing pre-primed canvases in various sizes and qualities. Canvas remained a popular painting
        surface into the 20th century, with artists experimenting with new techniques and styles. The introduction of synthetic materials and modern
        paints offered artists even more options for creating artwork on canvas. Canvas remains one of the most widely used
        surfaces for painting in contemporary art. While traditional stretched canvas is still popular, artists also explore alternative forms such as
        canvas panels, rolls, and even digital canvas for digital art. Overall, the history of canvas reflects its versatility, durability, and
        adaptability as a surface for artistic expression, making it a staple in the world of painting for centuries.
      </p></Fade>
    </div>
  );
};

export default About;
