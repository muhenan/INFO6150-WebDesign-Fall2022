import '../css/about.css'

const paragraphs = ["This website is about panda. The giant panda (Ailuropoda melanoleuca), also known as the panda bear (or simply the panda), is a bear species endemic to China. The giant panda is recognisable by its black eye patches and ears. It has a thickly furred white body with black limbs and a black band around its shoulders. The panda has small eyes and fairly poor vision. Giant pandas have very strong jaws and the largest molar teeth of any mammal. They use these teeth to crush tough bamboo stems. They also have lengthened bones in their wrists, and the forepaws have an extra 'thumb' which enables them to grasp even small bamboo shoots with great precision.",
  "Giant pandas are extremely rare. The World Wildlife Fund (WWF) says there are just 1,864 pandas left in the wild. There are an additional 400 pandas in captivity, according to Pandas International. The hunting of pandas has been banned for many years, so this is not the problem. Destruction of its habitat, when areas are cleared for crop cultivation, is one of the main reasons for the panda's decline. Another reason is that the bamboo that makes up most of their diet, is dying back. The pandas find it difficult to migrate to new feeding areas because they find themselves hemmed in by human settlements. As the bamboo disappears, the pandas simply starve to death.",
  "A target for poachers since ancient times, due to its thick fur, the Giant Panda has been a species in decline for many decades. Its low birthrate and decreasing habitat have not helped matters. In 2006, population numbers in the wild were thought to be around 1000, though it has since been suggested that this number was underestimated. In 2016, the Giant Panda was reclassified from ‘endangered’ to ‘vulnerable’ suggesting that targeted breeding programs were working. Chinese and American scientists are still studying giant pandas and their habits as part of a major conservation programme. A process to make bamboo flower early may well have a huge bearing on the panda's chances. Zoos around the world are participating in panda breeding programmes. There is still hope that with human help, the giant panda can survive in the wild."]


function About() {
  return (
    <main>
      {paragraphs.map(paragraph => {
        return (<p className="about_paragraph" key={paragraph.substring(0, 10)}>{paragraph}</p>)
      })}
    </main>
  );
}

export default About;