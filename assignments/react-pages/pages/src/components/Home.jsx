import '../css/home.css'

const h2s = ['Long Time Internet Subjects', 'Long Time Internet Kings']
const paragraphs = [['Lorem ipsum dolor sit amet. Quisque quis justo lacus. Phasellus condimentum est vitae orcialiquam, vel interdum ante porttitor.',
  'Lorem ipsum dolor mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, velinterdum ante porttitor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed eleifend nunc. Vivamus nec pharetra mi. Quisque quis justo lacus. Phasellus condimentum est vitae orci aliquam, vel interdum ante porttitor.'],
['At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
  'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'],
];

function Home() {
  return (<main>
    {h2s.map((title, index) => {
      return (
        <div className="panel" key={index}>
          <img src="http://placekitten.com/200/200" alt="A cute cat" />
          <div key={index}>
            <h2>{title}</h2>
            {paragraphs[index].map((paragraph, index2) => {
              return <p key={index * 10 + index2}>{paragraph}</p>
            })}
          </div>
        </div>
      )
    })}

  </main>)
}

export default Home;